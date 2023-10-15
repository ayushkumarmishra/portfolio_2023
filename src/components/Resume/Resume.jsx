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
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.js",
  import.meta.url
).toString();

const options = {
  cMapUrl: "/cmaps/",
  standardFontDataUrl: "/standard_fonts/",
};

const resizeObserverOptions = {};

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

  useResizeObserver(containerRef, resizeObserverOptions, onResize);

  function onDocumentLoadSuccess({ numPages: nextNumPages }) {
    setNumPages(nextNumPages);
  }

  return (
    <>
      <div className="flex w-full justify-center items-center">
        <Layout className="pt-12 mb-0 ">
          <AnimatedText
            text="Charting careers, pixel by pixel 😀"
            className="mb-14 !font-semibold"
          />
          <div className="flex items-center justify-center self-start mt-2">
            <Link
              to={pdf}
              target="_blank"
              className="flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light 
                hover:text-dark 
          border-2 border-solid border-transparent hover:border-dark
          "
            >
              Resume&nbsp;
              <LinkArrow className={"w-6 ml-1"} />
            </Link>
          </div>

          <div className="Example__container pt-10 flex min-h-screen w-full justify-center items-center ">
            <div className="Example__container__document" ref={setContainerRef}>
              <Document
                file={pdf}
                onLoadSuccess={onDocumentLoadSuccess}
                options={options}
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
                  />
                ))}
              </Document>
            </div>
          </div>
          <div className="flex items-center justify-center self-start mt-2">
            <Link
              to={pdf}
              target="_blank"
              className="flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light 
                hover:text-dark 
          border-2 border-solid border-transparent hover:border-dark
          "
            >
              Resume&nbsp;
              <LinkArrow className={"w-6 ml-1"} />
            </Link>
          </div>
        </Layout>
      </div>
    </>
  );
};

export default Resume;
