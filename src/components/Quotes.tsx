import axios from "axios";
import { useEffect, useState } from "react";
import fetchAllQuotes from "../services/quotes.service";

export interface Quote {
  text: string;
  author: string;
}

export default function Quotes() {
  const [postQuotes, setPostQuotes] = useState<Quote[]>([]);
  const [postQuote, setPostQuote] = useState<Quote>({
    text: "",
    author: "",
  });

  useEffect(() => {
    fetchAllQuotes().then((response) => console.log(response));
  }, []);

  function getAllQuotes() {
    fetchAllQuotes().then((response) => console.log(response));
  }

  return (
    <div>
      {}
      <ul>
        <li>Text: {postQuote.text}</li>
        <li>Author: {postQuote.author}</li>
      </ul>
    </div>
  );
}
