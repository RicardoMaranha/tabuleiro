

export default function Peao(cor, y, x){
  return (
    <div className="peao"
      style={{
        position: 'absolute',
        top: '2.5px',
        left: '2.5px',
        width: '65px',
        height: '65px',
        backgroundColor: cor === 'preto' ? 'gray' : 'red',
        borderRadius: '50%',
      }}
    ></div>
  );
};

