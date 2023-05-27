import style from '../styles/Modal.module.css';
import { RxCrossCircled } from "react-icons/rx"
import { AiFillDelete } from "react-icons/ai"
import { useDispatch } from 'react-redux';
import { deleteMoviesAction } from '../../redux/movies.actions';
import { AiFillEdit } from "react-icons/ai"
import { Link } from 'react-router-dom';

function Modal(props) {
     const dispatch = useDispatch()
     const { isOpen, onClose, element } = props;
     if (!isOpen) {
          return null;
     }


     const handleDelete = () => {
          dispatch(deleteMoviesAction(element._id))
     }
     return (
          <div className={style.modal} onClick={onClose}>
               <div className={style["modal-content"]} onClick={(e) => e.stopPropagation()}>
                    <div className={style["modal-header"]}>
                         <h2>{element.title}</h2>
                         <RxCrossCircled onClick={onClose} />
                    </div>
                    <div className={style["modal-body"]}>
                         <div>
                              <h3 className={style['modal-sub-headings']}>Synopsis</h3>
                              <span>{element.synopsis}</span>
                         </div>
                         <div>
                              <h3 className={style['modal-sub-headings']}>Top Cast</h3>
                              <div className={style['modal-cast']}>
                                   {
                                        element.cast.map((ele, i) => {
                                             return <div key={i}>
                                                  <span><bdi>Name: </bdi>{ele.name}</span>
                                                  <span><bdi>Role: </bdi>{ele.role}</span>
                                             </div>
                                        })
                                   }
                              </div>
                         </div>
                    </div>
                    <AiFillDelete className={style["delete-movie"]} onClick={handleDelete} />
                    <Link to={`/edit/${element._id}`}>
                         <AiFillEdit className={style['edit-movie']} />
                    </Link>
               </div>
          </div>
     );
}

export default Modal;