import React from 'react';
import {
    StatsContCont,
    StatsCont,
    StatsContDiv,
    StatsContH1,
    StatsContH3,
    LastStat,
    Container,
    MainContainer,
} from './Styles';
import GitHubCalendar from 'react-github-calendar';


export const GithubStats = () => {
  return (
    <Container>
            <h1 className="home-about-description">Days I <span className="purple">Worked</span> </h1>
            <div style={{ width: '60%', display: 'block', margin: 'auto' , padding:'5px' }}>

            <GitHubCalendar 
            blockSize={15}
            fontSize={16}
            year={2023}
            style={{color:'white'}}
            username="ShaileshPanghate" />
            </div>
          
            <h1 className="home-about-description">My <span className="purple">Statistics</span> </h1>
            <MainContainer>
            <div className='stats'>
                <img align="center" src="https://camo.githubusercontent.com/60192341e1be2fb2be87d5c0cbd2c44ee3c11704b3357d6a5cd08d42b8be6cda/68747470733a2f2f6769746875622d726561646d652d73746174732e76657263656c2e6170702f6170693f757365726e616d653d736861696c65736870616e67686174652673686f775f69636f6e733d74727565266c6f63616c653d656e"
                alt="ShaileshPanghate" />
                <img align="center" src="https://camo.githubusercontent.com/61429b8a78b2b1436b3d7cb4df672e9d20d86b553433c388b69f804eb99dc40f/68747470733a2f2f6769746875622d726561646d652d73747265616b2d73746174732e6865726f6b756170702e636f6d2f3f757365723d736861696c65736870616e676861746526"
                 alt="ShaileshPanghate"  />
            </div>
            </MainContainer>
        </Container>
  )
}