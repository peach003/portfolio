import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider divider />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
    Familiar with back-end and front-end development, AI integration, cloud deployment, and security engineering, with strong problem-solving skills, adaptability, and effective teamwork in cross-functional environments.
    </SectionText>
    <List>
      <ListItem>
        <picture>
          <DiReact size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experiece with <br />
            React, TypeScript, D3.js
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiFirebase size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            Python (Django), C#/.NET Core, RESTful API Development
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiZend size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>DevOps&DevSecOps</ListTitle>
          <ListParagraph>
            Experience with <br />
            GitHub Actions (CI/CD), AWS Lambda,STRIDE Threat Modeling, AES Symmetric & Asymmetric Encryption, Firewall/WAF/IDS, Database-Application Separation
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    <SectionDivider  />
  </Section>
);

export default Technologies;
