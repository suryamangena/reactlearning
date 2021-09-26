import React, {Component} from 'react';
               
class MoviesList extends Component {
               render(){
                	return (
                 		<ol class='movies-list'>
                         {
                      		this.props.movies.map(movie=> this.props.profiles.filter(profile=>profile.favoriteMovieID===movie.id)).map(profile=> {
                      					const userDetail = this.props.users[profile.userID].name;
                      
                                       return (

                              <li key={profile.id}>

                                <p>{`${userDetail}'s favorite movie is `}</p>
                              </li>
                            );
                    
                    		})
                         }
                         
                         </ol>
                 ) 
               }
                       
}

export default MoviesList;

               