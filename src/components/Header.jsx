export default function Header({title}){
    return(
        <header className="header">
        <div className=" flex-column ">
          <img className="header__avatar" src="./images/avatar.png" alt="avatar" />
            <h1 className="header__title">{title}</h1>
            <hr className="divider--light" />
            
        </div>   
          </header>
    )
}