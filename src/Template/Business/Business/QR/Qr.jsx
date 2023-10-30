import React from "react";
import { QRCodeSVG } from "qrcode.react";

const Qr = ({ social }) => {
  return (
    <div>
      <QRCodeSVG value={social} width={120} height={120} />
    </div>
  );
};

export default Qr;
