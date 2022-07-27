import {Component} from 'react';
import {Container, Post, PostComments, SendComment} from './style';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: []
    };
  }
  componentDidMount() {
      fetch("https://commentapi.herokuapp.com")
          .then((res) => res.json())
          .then((data) => {
              this.setState({
                  comments: data
              });
          })
  }
  render() {
    const {comments} = this.state;
    const pushComment = (name, comment) => {
      this.state.comments.push({
        name, comment
      })
      this.setState(this.state.comments)
    }
    const send = () => {
      if (localStorage.length === 0) {
        var name = prompt("Your name")
        if(!name){
          console.log("11")
          name = "Unknown"
        }
        localStorage.setItem("name", name)
      } else {
        name = localStorage.getItem("name")
        console.log(name)
      }
      let comment = document.getElementById("comment").value
      if (comment) {
        fetch("https://commentapi.herokuapp.com/send",
          {
              headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
              method: "POST",
              body: JSON.stringify({name, comment})
          })
          .then(function(res){
            pushComment(name, comment)
            console.log(res)
          })
          .catch(function(res){
            console.log(res)
          })
        console.log(name, comment)
      }
    }
    return (
      <Container>
        <h1>Twit Post (from Alisa)</h1>
        <Post>
          Category: Joke
          <hr/>
          <h3>Write Front-End in Python</h3>
          <p>Kelly's Answer: print("Front-End")</p>
        </Post>
        <PostComments>
          <table border="1px" cellSpacing="0" cellPadding="5px">
            <thead>
              <th>User</th>
              <th>Comment</th>
            </thead>
            <tbody>
              {/* <tr>{JSON.stringify(comments)}</tr> */}
              {comments.map((comment) => {
                return (
                  <tr>
                    <td>{comment.name}</td>
                    <td>{comment.comment}</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </PostComments>
        <SendComment>
          <textarea name="comment" id="comment" placeholder='Write a comment'></textarea>
          <br/>
          <button onClick={send}>Send</button>
        </SendComment>
      </Container>
    );
  }
}

export default App;
