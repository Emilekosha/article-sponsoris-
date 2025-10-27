import PubImg from '../assets/pub.jpg';

export default function AdCard() {
  return (
    <a
      href="https://emilekosha.github.io/LePerroquet_1/actualites/sponsors.html"
      
      rel="noopener noreferrer"
      className="block bg-white rounded-lg overflow-hidden  max-w-md mx-auto "
    >
      <img
        src={PubImg}
        alt="Publicité robot éclat pur"
        className="w-full h-64 object-cover"
      />
      <div className="p-4">
       
       
         <p className="text-sm text-gray-500 font-semibold mb-2">
          Sponsorisé  <span className="text-gray-700 font-bold"></span>
        </p>
         <p className="text-lg font-semibold text-gray-800 leading-snug">
          L'Art de sublimer la brillance et<br />
          la pureté de votre quotidien !
        </p>
      </div>
    </a>
  );
}
