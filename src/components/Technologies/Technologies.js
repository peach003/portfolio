import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider divider />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
    Skilled in full-stack development (back-end & front-end), AI integration, cloud deployment, and security engineering, with proven problem-solving ability, adaptability, and collaborative skills in cross-functional environments.
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
            Azure DevOps (CI/CD), SAST/SCA/DAST, STRIDE, Snyk, SonarQube, OWASP
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    <SectionDivider  />
  </Section>
);

export default Technologies;
