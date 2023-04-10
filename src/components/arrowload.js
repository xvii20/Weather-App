import * as React from "react"
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';


const ArrowComponent = (props) => (
  <svg
  onClick={function(){props.setloadmore(!props.loadmore)}}
  className="arrowsvg cssanimation fadeIn "
    xmlns="http://www.w3.org/2000/svg"
    width={70}
    height={30}
    viewBox="0 -1 20 20"
    {...props}
  >
    <title>{"arrow_right_left [#343]"}</title>
    <path
    
      fillRule="evenodd"
      d="m5.152 16.323-1.412-1.48a.493.493 0 0 1 .363-.834H19c.552 0 1-.459 1-1.011v.006a.996.996 0 0 0-1-.996H4.118c-.441 0-.666-.541-.36-.859l1.404-1.46a.995.995 0 0 0-.04-1.41l-.002-.004a.99.99 0 0 0-1.397.043l-3.177 3.34a2.002 2.002 0 0 0 .007 2.755l3.149 3.28a.989.989 0 0 0 1.39.042l.01-.01a.99.99 0 0 0 .05-1.402M14.898.275l.01-.01a.989.989 0 0 1 1.39.042l3.149 3.28c.735.77.738 1.982.008 2.756l-3.178 3.34a.99.99 0 0 1-1.396.044l-.003-.002a.99.99 0 0 1-.039-1.408l1.403-1.46a.505.505 0 0 0-.36-.853H1c-.552 0-1-.442-1-.996v-.002c0-.552.448-1.003 1-1.003h14.897c.439 0 .665-.52.363-.84l-1.412-1.489a.987.987 0 0 1 .05-1.399"
    />
  </svg>
)
export default ArrowComponent
