export default function Card({...props}){

  let bgColor = '';

  switch (props.item.content){
    case '0,0,0':
      bgColor = 'rgb(0, 0, 0)';
      break;
    case '0,255,0':
      bgColor = 'rgb(0, 255, 0)';
      break;
    case '255,255,0':
      bgColor = 'rgb(255, 255, 0)';
      break;  
    case '255,120,0':
      bgColor = 'rgb(255, 120, 0)';
      break; 
    case '255,0,0':
      bgColor = 'rgb(255, 0, 0)';
      break;
    default:
      bgColor = 'rgb(224 231 255)';
  }

  return(
    <section className="w-48 h-48 flex items-center justify-center flex-col">
      <section className={`p-4 m-4 shadow-xl rounded-md w-48 h-32 flex items-center justify-center opacity-80`} style={{background: bgColor}}>        
        <span className={bgColor == 'rgb(255, 120, 0)' || bgColor == 'rgb(255, 0, 0)' ? 'text-white' : ''}>{props.item.content.charAt(0).toUpperCase() + props.item.content.substring(1)}</span>
      </section>
      <span className="text-sm text-center w-full text-gray-600">{props.item.description.charAt(0).toUpperCase() + props.item.description.substring(1)}</span>
    </section>
  )
}