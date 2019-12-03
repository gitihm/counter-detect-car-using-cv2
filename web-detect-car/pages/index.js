import firebase from "../lib/firebase";
import { useState,useEffect } from "react";
import { Row, Col } from "antd";

const Layout = () => {
  const [loading, setloading] = useState(true);
  const [ins, setIns] = useState(0);
  const [out, setOut] = useState(0);
  const [all, setAll] = useState(0);
  useEffect(() => {
    
    // const rfpsRef = firebase.database().ref("/user");
    // rfpsRef.on("value", snapshot => {
    //   const rfp = snapshot.val();
    //   console.log(rfp);
    //   setRfps(rfp)
      
    // });
    const rfpsRef1 = firebase.database().ref("/user/in");
    rfpsRef1.on("value", snapshot => {
      console.log(snapshot.val());
      setIns(snapshot.val())
      
    })
    const rfpsRef2 = firebase.database().ref("/user/out");
    rfpsRef2.on("value", snapshot => {
      console.log(snapshot.val());
      setOut(snapshot.val())
      
    })
    const rfpsRef3 = firebase.database().ref("/user/all");
    rfpsRef3.on("value", snapshot => {
      console.log(snapshot.val());
      setAll(snapshot.val())
      
    })
  });
  return (
    <>
      <div className="bg">
        <div className="full">
          <div className="setcenter">
            <div className="bg-color">
              <Row>
                <Col>
                  <h1>Detect car</h1>
                  <hr />
                </Col>
                <Col>
                  <h3>รถขาเข้า :{ins} </h3>
                </Col>
                <Col>
                <h3>รถขาออก : {out}</h3>
                </Col>
                <Col>
                  <h3>ทั้งหมด : {all}</h3>
                </Col>
              </Row>
            </div>
          </div>
        </div>

        <style jsx>{`
        :global(body, html) {
          margin: 0;
          font-family: "Staatliches";
          background-image: url("http://www.แท็กซี่ป้ายแดงโตโยต้า.com/wp-content/uploads/2018/10/banner-taxi-bg.jpg");
          height: 100vh;
          background-position: center;
          background-repeat: no-repeat;
          background-size: cover;
         
        }
        :global(@font-face) {
          font-family: Staatliches;
          src: url(/static/fonts/Staatliches-Regular.ttf);
          font-weight: 400;
        }
        .topbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          height: 32px;
          background-color: rgba(0,0,0,0.5);
          padding: 0px 40px;
          box-shadow: rgba(0,0,0,0.2) 0px 1px 2px;
        }
        .bg-color{
            background-color: rgba(0,0,0,0.5);
            width:30%;
            display: flex;
            text-align: center;
            justify-content: center;
            height:40vh;
        }
        a {
          color: black;
          text-decoration: none;
        }
        a:hover {
          user-select: none;
        }
        .menu-container {
          display: flex;
        }
        .menu-container div {
          margin-left: 20px;
        }
        .setcenter{
            display : flex;
            justify-content : center;
            height: 100vh;
            align-items: center;
        }
        h1,h3 {
            color: white;
            text-align:center:
           
        }
      `}</style>
      </div>
    </>
  );
};

export default Layout;
