import Button from "./Button"
export default function Profile(props){
    return(
        <div className="main-container">
        <img className="img" src="https://semeandoafeto.imadel.org.br/packages/trustir/exclusiva/img/user_placeholder.png" alt="user.jpeg" />
        <h2>{props.name}</h2>
        <div className="content-container">
        <p>{props.bio}</p>
        <p>{props.email}</p>
        <p className="last">{props.phone}</p>
        </div>
        <Button   textBtn = "GitHub" />
        <Button   textBtn = "Linkedin" />
        <Button   textBtn = "Twitter"/>
        <Button   textBtn = "Instagram"/>
        </div>
    )
} 