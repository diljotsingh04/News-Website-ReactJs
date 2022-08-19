import React from 'react'
import './Card.css'

const Allcards = ({newsArticles}) => {

  return (
    <div className="cards">
            {
                newsArticles && newsArticles.map(newz => {
                    return (
                        <div className="card" key={newz.url}>
                            <div className="imag">
                                <img src={newz.urlToImage ? newz.urlToImage: "https://cdn.dribbble.com/users/108543/screenshots/4434654/media/b6b59d0cd0ad876f8e3a1484cfc10e05.jpg?compress=1&resize=400x300"} alt="Loading.." className="i1" />
                            </div>
                            <div className="othInfo">
                                <div className="authorName">Author: {newz.author? newz.author : "Unknown"}</div>
                                <div className="info">
                                    <h3><p>{newz.title}</p></h3>
                                    <p>{newz.description? newz.description:"Note:- Description is not provided here, You can read the detailed news by clicking on read more button"}</p>
                                </div>
                                <div className="buyNow">
                                    <a rel="noreferrer" className="btn" href={newz.url} target="_blank">Read More...</a>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
  )
}

export default Allcards
