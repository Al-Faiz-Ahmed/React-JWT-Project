import React from "react";
import { Link } from "react-router-dom";
import productData from "../productsData/productsData";
import styles from "../css/productScreenInfo.module.css";
import ProductRating from "./productRating";
export default function ProductScreenInfo({ giveId }) {
  let data = productData.find((findingFromID) => findingFromID._id === giveId);
  console.log(data);
  return (
    <>
      <div className={styles.main}>
        <div className={styles.breadCrumbs}>
          <p>
            <span>
              <Link to="/" className={styles.link}>
                Products{" "}
              </Link>
              <i className="fa fa-angle-right"></i>
            </span>
            <span>{data.name}</span>
          </p>
        </div>
        <div className={styles.productDetailsDiv}>
          <div className={styles.imageParentDiv}>
            <img src={require(`../../Assets/${data.image}`)} alt={data.name} />
          </div>
          <div className={styles.productDetails}>
            <h3>{data.name}</h3>
            <div className={styles.rating}>
              <ProductRating
                Rating={data.rating}
                Reviews={data.numReviews}
                color={"gold"}
              />
            </div>
            <p className={styles.price}>Price: ${data.price}</p>
            <p className={styles.description}>
              Description: {data.description}
            </p>
          </div>
          <div className={styles.addtoCart}>
            <div>
              <div className={styles.price}>
                <p>Price:</p>
                <p>${data.price}</p>
              </div>
              <div className={styles.stock}>
                <p>Status:</p>
                <p>In Stock</p>
              </div>
            </div>
            <div className={styles.addtoCartbutton}>
              <button>Add to Cart</button>
            </div>
          </div>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et, dolorem
          debitis nesciunt cupiditate atque sapiente dolorum repellendus est
          impedit quia delectus, iusto quaerat minus in mollitia veniam
          accusamus labore? Eius necessitatibus, at reiciendis obcaecati
          officiis expedita accusamus eaque possimus nesciunt laborum numquam
          maxime incidunt culpa eveniet minus soluta beatae ducimus voluptatem
          enim consectetur hic. Optio laudantium quos maxime consequatur
          voluptate esse, ullam debitis ipsam aliquid at dignissimos rerum
          corrupti minus, itaque dolorum quod placeat ea quas. Sapiente tenetur,
          nihil quas sit repellat sed aspernatur accusamus culpa. Sequi, quos
          sunt! Cumque explicabo error asperiores aperiam incidunt provident
          maxime suscipit veniam repudiandae perferendis voluptatum soluta
          deserunt laudantium exercitationem necessitatibus nobis, consequuntur
          quaerat nesciunt sint maiores harum, vero iusto. Illo culpa animi
          necessitatibus laboriosam, expedita debitis atque? Aliquid recusandae
          perspiciatis architecto ipsam qui mollitia dolores quaerat doloremque
          consectetur optio, deserunt assumenda ad, facere sint error iure?
          Voluptates, numquam nesciunt quas deserunt quidem iure. Quae suscipit
          consequuntur eaque ut ea excepturi unde quasi maiores voluptate
          expedita, exercitationem, impedit nulla amet! Itaque laudantium porro
          magni. Atque eos sequi esse porro debitis. Repellendus fugiat tenetur
          temporibus perspiciatis! Possimus accusantium nihil, harum ab suscipit
          dicta fuga ipsum, autem fugit est deserunt? Autem vitae sint hic
          dolores cum.
        </div>
      </div>
    </>
  );
}
