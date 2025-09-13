import React from 'react';
import { 
  BlogCard, 
  CardInfo, 
  ExternalLinks, 
  GridContainer, 
  HeaderThree, 
  Hr, 
  Tag, 
  TagList, 
  TitleContent, 
  UtilityList, 
  Img,
  ImageContainer,
  CardContent,
  StackSection
} from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';

const Projects = () => (
  <Section nopadding id="projects">
    <SectionDivider />
    <SectionTitle main>Projects</SectionTitle>
    <GridContainer>
      {projects.map((p, i) => {
        return (
          <BlogCard key={i}>
            <ImageContainer>
              <Img src={p.image} />
            </ImageContainer>
            <CardContent>
              <TitleContent>
                <HeaderThree title>{p.title}</HeaderThree>
              </TitleContent>
              <CardInfo className="card-info">{p.description}</CardInfo>
              <Hr />
              <StackSection>
                <TitleContent>Stack</TitleContent>
                <TagList>
                  {p.tags.map((t, i) => {
                    return <Tag key={i}>{t}</Tag>;
                  })}
                </TagList>
              </StackSection>
              <UtilityList>
                <ExternalLinks href={p.visit}>Code</ExternalLinks>
                <ExternalLinks href={p.source}>Source</ExternalLinks>
              </UtilityList>
            </CardContent>
          </BlogCard>
        );
      })}
    </GridContainer>
  </Section>
);

export default Projects;