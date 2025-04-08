import { Link } from "react-router-dom";
import AnimatedText from "../Home/AnimatedText";
import Layout from "../Home/Layout";
import { LinkArrow } from "../Navbar/Icons";
import pdf from "../../assets/Ayush_Resume.pdf";
import { useCallback, useState } from "react";
import { useResizeObserver } from "@wojtekmaj/react-hooks";
import { pdfjs, Document, Page } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.js",
  import.meta.url
).toString();

const options = {
  cMapUrl: "/cmaps/",
  standardFontDataUrl: "/standard_fonts/",
};

const maxWidth = 800;

const Resume = () => {
  const [numPages, setNumPages] = useState();
  const [containerRef, setContainerRef] = useState(null);
  const [containerWidth, setContainerWidth] = useState();

  const onResize = useCallback((entries) => {
    const [entry] = entries;
    if (entry) {
      setContainerWidth(entry.contentRect.width);
    }
  }, []);

  useResizeObserver(containerRef, {}, onResize);

  function onDocumentLoadSuccess({ numPages: nextNumPages }) {
    setNumPages(nextNumPages);
  }

  return (
    <div className="flex w-full justify-center items-center">
      <Layout className="pt-8 sm:pt-12 mb-0">
        <div className="flex flex-col items-center justify-center text-center w-full">
          <AnimatedText
            text="Charting careers, pixel by pixel 😀"
            className="mb-8 sm:mb-14 !text-2xl sm:!text-4xl md:!text-6xl text-center"
          />
        </div>
        <div className="flex items-center justify-center self-start mt-2">
          <Link
            to={pdf}
            target="_blank"
            className="flex items-center bg-dark text-light p-2 px-4 sm:p-2.5 sm:px-6 rounded-lg text-sm sm:text-lg font-semibold hover:bg-light 
              hover:text-dark 
              border-2 border-solid border-transparent hover:border-dark
              transition-all duration-300"
          >
            Resume&nbsp;
            <LinkArrow className="w-4 sm:w-6 ml-1" />
          </Link>
        </div>

        <div className="Example__container pt-6 sm:pt-10 flex w-full justify-center items-center">
          <div className="Example__container__document w-full px-2 sm:px-0 max-w-[95vw] sm:max-w-[800px]" ref={setContainerRef}>
            <Document
              file={pdf}
              onLoadSuccess={onDocumentLoadSuccess}
              options={options}
              className="w-full"
            >
              {Array.from(new Array(numPages), (el, index) => (
                <Page
                  key={`page_${index + 1}`}
                  pageNumber={index + 1}
                  width={
                    containerWidth
                      ? Math.min(containerWidth, maxWidth)
                      : maxWidth
                  }
                  className="shadow-lg w-full"
                  renderTextLayer={false}
                  renderAnnotationLayer={false}
                  scale={window.innerWidth < 640 ? 1.8 : 1.0}
                  loading={
                    <div className="flex justify-center items-center w-full h-[500px]">
                      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-dark"></div>
                    </div>
                  }
                />
              ))}
            </Document>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Resume;
