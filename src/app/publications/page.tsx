'use client';

/* eslint-disable */
import PageLayout from '@/components/PageLayout';
// import { cp } from 'fs';
import React, { useEffect } from 'react';

const bibtexParse = require('@orcid/bibtex-parse-js');


interface Publication {
  title: string;
  authors: string[];
  venue: string;
  year: number;
  type: string;
  doi?: string; // optional field for DOI
}

const publicationsData: Publication[] = [];


const Publications = () => {
  const [publicationsData, setPublicationsData] = React.useState<Publication[]>([]);

  const cleanBibtexString = (str: string) => {
    if (!str) return str;
  
    // Replace common BibTeX special characters with normal ones
    return str
      .replace(/\{\\`e\}/g, 'è')
      .replace(/\{\\'e\}/g, 'é')
      .replace(/\{\\`a\}/g, 'à')
      .replace(/\{\\c\}/g, 'ç')
      .replace(/\{\\`o\}/g, 'ò')
      .replace(/\{\\`i\}/g, 'ì')
      .replace(/\{\\`u\}/g, 'ù')
      .replace(/\{\\\'o\}/g, 'ó')
      .replace(/\\&/g, '&')
      .replace(/{|}/g, '');  // Removes any remaining curly braces
  };

  useEffect(() => {
    const fetchBibFile = async () => {
      try {
        // Fetch the .bib file from the public directory
        const response = await fetch("/publications.bib");
        const bibtexText = await response.text();

        // Parse the entire BibTeX content
        const parsedData = bibtexParse.toJSON(bibtexText);

        const formattedPublications = parsedData.map((entry: any) => ({
          title: cleanBibtexString(entry.entryTags.title || "Unknown title"),
          venue : cleanBibtexString(entry.entryTags.journal || entry.entryTags.booktitle || "Unknown venue"),
          authors: entry.entryTags.author ? entry.entryTags.author.split(' and ').map((author: string) => {const [lastName, firstName] = author.split(',').map(part => cleanBibtexString(part.trim()));return `${firstName} ${lastName}`;
    })
  : ["Unknown author"],
          year: parseInt(entry.entryTags.year) || 0,
          type: entry.entryType || "Unknown type",
          doi: entry.entryTags.doi || "",
        }));

        const sortedPublications = formattedPublications.sort((a: any, b: any) => b.year - a.year);

        // Set the publications data into state
        setPublicationsData(sortedPublications);
      } catch (error) {
        console.error("Failed to fetch and parse the .bib file", error);
      }
    };

    fetchBibFile();
  }, []);

  return (
      <PageLayout title="Publications" subtitle="A list of my research publications">
    <div>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {publicationsData.length > 0 ? (
          publicationsData.map((pub, index) => {
            const isNewYear = index === 0 || pub.year !== publicationsData[index - 1].year;
            return (
              <React.Fragment key = {index}>
              {isNewYear && (
                  <div className="year-separator">
                  <span className="year-label">{pub.year}</span>
                  <br />  
                  <hr />
                </div>
              )}

            <li key={index} style={{ marginBottom: '30px' }}>
              <h3 style={{ fontSize: '1.2em', marginBottom: '2px' }}>
                {pub.title} <span style={{ fontWeight: 'normal' }}></span>
              </h3>
              <p style={{ marginTop: '0', marginBottom: '1px' }}>
                {pub.authors.join(', ')}
              </p>
              <p style={{ fontStyle: 'italic', marginTop: '0' }}>
                {pub.venue}, {pub.year}
              </p>
            </li>
          </React.Fragment>
            );
          })
        ) : (
          <li>No publications found.</li>
        )}
      </ul>
    </div>
  </PageLayout>
  );
};


export default Publications;
