import React from "react";
import "./Entry.css";

interface EntryProps{
  title: string;
  subtitle: React.ReactNode;
  children?: React.ReactNode;
}

const Entry = ({title, subtitle, children}: EntryProps) => {

  return (
    <div className="entry">
      <div className="entryHeader">
          <h2>{title}</h2>
          <br></br>
          {subtitle}
      </div>
      {children}
    </div>
  )
}

export default Entry;