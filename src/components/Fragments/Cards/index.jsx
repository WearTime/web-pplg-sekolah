import { javascript, reactjs, threejs } from "../../../assets";
import Card from "../../Elements/Card";
import Header from "../../Elements/Header";
import Paragraph from "../../Elements/Paragraph";
import BallCanvas from "../../canvas/Ball";

const Cards = () => {
  return (
    <>
      <Header classname="card-title">HAL YANG DI PELAJARI</Header>
      <div className="card-row">
        <Card>
          <BallCanvas icon={javascript} classname="ball-js" />
          <Paragraph classname="card-desc">PEMBUATAN</Paragraph>
        </Card>
        <Card>
          <BallCanvas icon={reactjs} classname="ball-react" />
          <Paragraph classname="card-desc">PENGEMBANGAN</Paragraph>
        </Card>
        <Card>
          <BallCanvas icon={threejs} classname="ball-three" />
          <Paragraph classname="card-desc">PEMELIHARAAN</Paragraph>
        </Card>
      </div>
    </>
  );
};

export default Cards;
