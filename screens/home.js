import React,{Component} from "react";
import { View,Text,StyleSheet,Image,TouchableOpacity } from "react-native";
import { Header,Icon,AirbnbRating } from "react-native-elements";
import{RFValue} from "react-native-responsive-fontsize";
import axios from 'axios';
export default class Homescreen extends Component{
    constructor(){
        super();
        this.state={
            movieDetails:{}
        }
    }
    componentDidMount(){
        this.getmovie()
    }

    getmovie=()=>{
        const url="http://localhost:5000/get-movie"
        axios
        .get(url)
        .then(response=>{
            let details=response.data.data
            details["duration"]=this.timeconvet(details.duration)
            this.setState({moviedetails:details})
        })
        .catch(error=>{
            console.log(error.message)
        })
    }
     likedmovie=()=>{
        const url="http://localhost:5000/liked-movie"
        axios
        .post(url)
        .then(response=>{
            this.getmovie()
        })
        .catch(error=>{
            console.log(error.message)
        })
    }
    dislikedmovie=()=>{
        const url="http://localhost:5000/disliked-movie"
        axios
        .post(url)
        .then(response=>{
            this.getmovie()
        })
        .catch(error=>{
            console.log(error.message)
        })
    }
    notwatched=()=>{
        const url="http://localhost:5000/did-not-watch"
        axios
        .post(url)
        .then(response=>{
            this.getmovie()
        })
        .catch(error=>{
            console.log(error.message)
        })
    }
    render(){
        const {movieDetails}=this.state
        if (movieDetails.post_link){
            const{
                poster_link,
                title,
                release_date,
                duration,
                overView,
                rating
            }=movieDetails

            return(
                <View style={styles.container}>
                    <View style={styles.headcontainer}>
                        <Header 
                        centerComponent={
                            {
                                Text:'Movies recommended',
                                style:styles.headertitle
                            }
                        }
                        rightcomponent={
                            {
                                icon:'search',
                                color:'#fff'
                            }
                        }
                        backgroundColor={"#d500f9"}
                        containerStyle={{flex:1}}
                        />
                        </View> 
                        <View style={styles.subcontainer}>
                            <View style={styles.subtopcontainer}>
                                <Image style={styles.posterimage} source={{uri:poster_link}}/>
                            
                                </View>
                                <View style={styles.subbotomcontainer}>
                            <View style={styles.upperbotomcontainer}>
                                <Text style={styles.title} >{title}</Text>
                                <Text style={styles.subtitle} >{`${release_date.split("-")[0]}|${duration}`}; 
                                </Text>
                                
                                </View>
                                <View style={styles.middlebotomcontainer}>
                                    <View style={{flex:0.3}}>
                                        <AirbnbRating
                                        count={10}
                                        reviews={["","","","",""]}
                                        defaultRating={rating}
                                        isDisabled={true}
                                        size={RFValue(25)}
                                        starContainerStyle={{marginTop:-30}}
                                        />
                                    </View>
                                    <View style={{flex:0.7,padding:50}}>
                                        <Text style={styles.overView}>
                                            {overView}
                                        </Text>
                                    </View>
                                </View>
                        </View>
                            <View style={styles.lowerbotomcontainer}>
                            <View style={styles.iconbuttoncontainer}>
                                <TouchableOpacity onPress={this.likedmovie}>
                                    <Icon
                                    reverse
                                    name={"check"}
                                    type={"entypo"}
                                    size={RFValue(30)}
                                    color={"#76ff03"}
                                    />
                                </TouchableOpacity>
                                <TouchableOpacity onPress={this.dislikedmovie}>
                                    <Icon
                                    reverse
                                    name={"check"}
                                    type={"entypo"}
                                    size={RFValue(30)}
                                    color={"#ff1744"}
                                    />
                                </TouchableOpacity>
                                <TouchableOpacity onPress={this.notwatched}>
                                    <Icon
                                    reverse
                                    name={"check"}
                                    type={"entypo"}
                                    size={RFValue(30)}
                                    color={"#76ff03"}
                                    />
                                </TouchableOpacity>
                            </View>
                        </View>
                </View>
                </View>
            )
        }
    }
}
const styles=StyleSheet.create({
    container:{
        flex:1
    },
    headercontainer:{
        flex:0.1
    },
    headertitle:{
        color:"#fff",
        fontWeight:"bold",
        fontSize:RFValue(18)
    },
    container:{
        flex:1
    }
})
7