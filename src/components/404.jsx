import { Link } from "react-router-dom";
export default function FourOhFour() {
  return (
    <div>
      {/* <Head>
        <title>Alex not found</title>
        <link rel="icon" href="6b4.jpeg" />
      </Head> */}
    <Link href="/">
    {/* <a> */}
      <div className="container">
      
      <h1>This looks bad...</h1>
      <div className="clearfix">
        {/* <imag className="profile" src={dog} alt="Ugly Dog" /> */}
        <p>
        How did you get here?!
        Click anywhere to go back home.
        </p>
        </div>
      </div>
    </Link>
    </div>
  );
}