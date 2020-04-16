import React from 'react'
import {HomePage} from "../components/home_page";
import StarRatingComponent from 'react-star-rating-component';
import s from '../stylesheets/mainpage.module.css'
import axios from "axios";

export class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            rate: 5,
            reviewText: '',
            nameText: '',
            reviewsList: null
        };

        this.handleNameTextChange.bind(this);
        this.handleRateChange.bind(this);
        this.handleReviewTextChange.bind(this);
        this.sendReview.bind(this);
    }

    componentDidMount() {
        this.getReviews().then(res => console.log(res));
    }

    handleReviewTextChange = (value) => {
        this.setState({reviewText: value})
    };

    handleNameTextChange = (value) => {
        this.setState({nameText: value})
    };

    handleRateChange = (nextValue, prevValue, name) => {
        this.setState({rate: nextValue});
        console.log(this.state)
    };

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log(this.state)
    }

    getReviews = async () => {
        await axios.get('http://localhost:40001/getReviews')
            .then(res => {
                this.setState({
                    reviewsList: this.mapper(res.data)
                })
            });
    };

    mapper = (data) => {
        return data.map((review) => {
            return (
                <div className={s.review}>
                    <p style={{gridArea:'name'}}> {review.nameText} </p>
                    <p style={{gridArea:'rev'}}> {review.reviewText} </p>
                    <StarRatingComponent
                        className={s.stars}
                        name="reviewRate"
                        emptyStarColor={'#010066'}
                        starCount={5}
                        value={review.rate}
                        editable={false}
                    />
                    <p className={s.revData}> {review.date} </p>
                </div>
            )
        })
    };

    sendReview = async () => {
        console.log('Comming soon');

        await fetch('http://localhost:40001/addReview', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                rate: this.state.rate,
                reviewText: this.state.reviewText,
                nameText: this.state.nameText,
                date: `${new Date().getUTCDate() + 1}.${new Date().getUTCMonth() + 1}.${new Date().getUTCFullYear()}`
            }),
        }).then(res =>{
            if (res.data !== 1) console.log(res.data);
            else this.getReviews().then(res => console.log(res));
        })
    };

    render() {
        return <HomePage
            reviewsList={this.state.reviewsList}
            nameText={this.state.nameText}
            reviewText={this.state.reviewText}
            rate={this.state.rate}
            sendReview={this.sendReview}
            handleReviewTextChange={this.handleReviewTextChange}
            handleNameTextChange={this.handleNameTextChange}
            handleRateChange={this.handleRateChange}
        />
    }
}
