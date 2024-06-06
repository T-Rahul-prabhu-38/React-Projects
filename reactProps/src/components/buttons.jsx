export default function TabButton(props){
    return <li>
        <button className={props.isSelected ?'active' : undefined } onClick={props.onSelect}>{props.children}</button>
</li>
  }


  