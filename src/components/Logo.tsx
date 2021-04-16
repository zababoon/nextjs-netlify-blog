import {TagContent} from "../lib/tags";
import Link from "next/link";
import {SocialList} from "./SocialList";
import Layout from "./Layout";

type Props = {
    tag: TagContent;
};
export default function Logo({ tag }: Props) {
    return (
        <>
            <div className={"container"}>
                <img src={"/images/logo1.png"} width={555} height={50}></img>
                <p>
                    {/*<h2>Live Long Life</h2>*/}
                </p>
            </div>
            <style jsx>{`
        .container {
        position: relative;
        width:100%;
        height:100px;
        // margin-bottom: 100px;
        // padding: 100px 100px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex: 1 1 auto;
          padding: 0 1.5rem;
        //   flex-direction: row;
        }
        
        img {
            filter: grayscale(100%);
            border-radius: 10%;
        }
        
        h1 {
          font-size: 2.5rem;
          margin: 0;
          font-weight: 500;
        }
        h2 {
          font-size: 1.75rem;
          font-weight: 400;
          line-height: 1.25;
        }
        @media (min-width: 769px) {
          h1 {
            font-size: 3rem;
          }
          h2 {
            font-size: 2.25rem;
          }
        }
      `}</style>
        </>
    );
}
