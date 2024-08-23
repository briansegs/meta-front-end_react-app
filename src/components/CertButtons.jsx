import React from "react";
import { GrDocumentVerified } from "react-icons/gr";
import { GrDocumentPdf } from "react-icons/gr";

const CertButton = ({ download, verify }) => (
  <button className="px-4 text-lg py-2 border-2 border-slate-800 bg-slate-800 text-neutral-300 font-semibold rounded-lg mb-2 hover:bg-neutral-100 hover:text-slate-800">
    {verify && (
      <span className="flex items-center gap-2">
        Verify <GrDocumentVerified />
      </span>
    )}
    {download && (
      <span className="flex items-center gap-2">
        Download <GrDocumentPdf />
      </span>
    )}
  </button>
);

const CertButtons = ({ pdfFile, pdfName, verifyLink }) => (
  <div className="flex justify-end gap-2">
    <a href={verifyLink} target="_blank" rel="noreferrer">
      <CertButton verify />
    </a>
    <a href={pdfFile} download={pdfName}>
      <CertButton download />
    </a>
  </div>
);

export default CertButtons;
