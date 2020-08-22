import React, { useState, useCallback } from "react";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import Layout from "../components/Layout/layout";
import SEO from "../components/seo";
import { useStaticQuery, graphql } from "gatsby"

const photos2 = [
  {
    src: "https://source.unsplash.com/2ShvY8Lf6l0/800x599",
    width: 4,
    height: 3
  },
  {
    src: "https://source.unsplash.com/Dm-qxdynoEc/800x799",
    width: 1,
    height: 1
  }
];


const PhotoGallery = () => {

  const data = useStaticQuery(graphql`
  query GalleryCateringData {

    photoGallery: allWordpressWpPhotoGallery {
      edges {
        node {
          title
          id
          acf {
            photo {
              localFile {
                url
                childImageSharp {
                  resize {
                    aspectRatio
                    height
                    width
                  }
                }
              }
            }
          }
        }
      }
    }
  }`)


// const returPhotoObject = () => {
  //   return data.photoGallery.edges.map(photo => {
    //     if (photo.node.acf.photo) {
      //       photosObj["src"] = photo.node.acf.photo.localFile.url
      //       photosObj["height"] = photo.node.acf.height
      //       photosObj["width"] = photo.node.acf.width
      //     }
      //     return photosObj;
      //   })
      // }
      const photos = []
      data.photoGallery.edges.forEach((a) => {
        const photosObj = {};
        if (a.node.acf.photo) {
          photosObj["src"] = a.node.acf.photo.localFile.url
          photosObj["height"] = a.node.acf.photo.localFile.childImageSharp.resize.height
          photosObj["width"] = a.node.acf.photo.localFile.childImageSharp.resize.width
        }

        photos.push(photosObj)
      })



  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  return (
    <Layout>
      <SEO title="Dinner Arrangement" />
    <div>
      <Gallery photos={photos} onClick={openLightbox} />
      <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel
              currentIndex={currentImage}
              views={photos.map(x => ({
                ...x,
                srcset: x.srcSet,
                caption: x.title
              }))}
            />
          </Modal>
        ) : null}
      </ModalGateway>
    </div>
    </Layout>
  );
}

export default PhotoGallery;