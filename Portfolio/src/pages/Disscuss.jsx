import React from 'react'
import styles from "./Disscuss.module.css";

const disscuss = () => {
  return (
    <>
    <div className={styles.Parent}>
      <div>
<h1>
  Do you have any porject idea? <br/>
  lets disscuss your project
</h1>
      </div>

      <div>
<span className={styles.disscussTypo}>
  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae maiores minus, omnis quae aperiam,<br/> ad voluptates aut in odio quo laboriosam illum sed nesciunt eos eaque autem perferendis quia suscipit?
</span>
      </div>
 <button className={styles.btn}>let's work Together</button>
    </div>
    </>
  )
}

export default disscuss