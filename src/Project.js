import React from "react";
import styled from "styled-components";
import ComponentTitle from "./ComponentTitle";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import coinToMeImg from "./img/project/cointome.png";
import friendshipImg from "./img/project/friendship.png";
import introImg from "./img/project/intro.png";
import chatImg from "./img/project/chat.png";



const Project = (props) => {
    const [MainTitle, setMainTitle] = React.useState("Project 📱");
    const [SubTitle, setSubTitle] = React.useState("프로젝트");
    const useStyles = makeStyles({
        root: {
          maxWidth: 345,
          margin: "25px 0",
          ['@media (max-width: 1119px)']: { // eslint-disable-line no-useless-computed-key
            maxWidth: 300,
          },
          ['@media (max-width: 635px)']: { // eslint-disable-line no-useless-computed-key
            maxWidth: 200,
          }
        },
      });
    const classes = useStyles();
    return(
        <ProjectComponent>
            <ComponentTitle mainTitle={MainTitle} subTitle={SubTitle}/>
            <CategoryTitle> Node.js | Express </CategoryTitle>

            <CardComponent className="Text">
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Contemplative Reptile"
                  height="140"
                  image={coinToMeImg}
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    CoinToMe Project
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    [팀프로젝트] Node | Express | MongoDB | Pug 를 활용해 제작한 코인 커뮤니티 사이트입니다. (2021-01 ~ ing...)
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary" onClick={()=>{
                  window.open("https://github.com/BlockMonkeys/Express_Mongo_CoinToMe");
                }}>
                  View Source Code
                </Button>
            </CardActions>
          </Card>

          <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Contemplative Reptile"
                  height="140"
                  image={chatImg}
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Chatting App
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    [개인프로젝트] Node | Express | SocketIO | Pug 를 활용해 제작한 코인 커뮤니티 사이트입니다. (2021-02 ~ ing...)
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary" onClick={()=>{
                  window.open("https://github.com/BlockMonkeys/Node_Socket_Chatting")
                }}>
                  View Source Code
                </Button>
            </CardActions>
          </Card>
          </CardComponent>



          <CategoryTitle>React</CategoryTitle>
            <CardComponent className="Text">
            <Card className={classes.root}>
              <CardActionArea onClick={()=>{
                window.alert("현재 보고계신 페이지입니다 !😅");
              }}>
                <CardMedia
                  component="img"
                  alt="Contemplative Reptile"
                  height="140"
                  image={introImg}
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    자기소개페이지
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    [개인프로젝트] React 를 활용해 만든 자기소개 페이지입니다. (2021-01 ~ 2021-02)
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary" onClick={()=>{
                  window.open("https://github.com/BlockMonkeys/React_Introduce");
                }}>
                  View Source Code
                </Button>
            </CardActions>
          </Card>
            <Card className={classes.root}>
              <CardActionArea onClick={()=>{
                window.open("https://react-friendshiptest.firebaseapp.com/");
              }}>
                <CardMedia
                  component="img"
                  alt="Contemplative Reptile"
                  height="140"
                  image={friendshipImg}
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    우정테스트
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    [개인프로젝트] React | Redux | Hooks | Firebase를 통해 만든 펭귄 우정테스트 앱입니다. (2021-01 ~ 2021-02)
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary" onClick={()=>{
                  window.open("https://github.com/BlockMonkeys/React_FriendshipTest");
                }}>
                  View Source Code
                </Button>
            </CardActions>
          </Card>
          </CardComponent>
        </ProjectComponent>
    )
}

const ProjectComponent = styled.div`
    margin-left: 25%;
    display: flex;
    flex-direction: column;
    @media (max-width: 1119px){
      margin-left: 0;
    }
`;

const CardComponent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;

const CategoryTitle = styled.div`
  text-align: center;
  font-size: 20px;
  font-weight: 800;
  padding-bottom: 15px;
  border-bottom: 1px solid gray;
`;

export default Project;