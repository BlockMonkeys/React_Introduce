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



const Project = (props) => {
    const [MainTitle, setMainTitle] = React.useState("Project 📱");
    const [SubTitle, setSubTitle] = React.useState("프로젝트");
    const useStyles = makeStyles({
        root: {
          maxWidth: 345,
        },
      });
    const classes = useStyles();
    return(
        <ProjectComponent>
            <ComponentTitle mainTitle={MainTitle} subTitle={SubTitle}/>
            <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            CoinToMe Project
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            [팀프로젝트] 코인커뮤니티 사이트를 만들어보고자 2021년 2월부터 진행하는 프로젝트입니다.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
        </ProjectComponent>
    )
}

const ProjectComponent = styled.div`
    margin-left: 25%;
    display: flex;
    flex-direction: column;
`;

export default Project;