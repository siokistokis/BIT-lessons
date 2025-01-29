import "./Button.css"

export default function Button({className="", children, href="#", ...props}) {

    return(
     <a href={href} className={`btn ${className}`}>{children}</a>
    );
  }
  