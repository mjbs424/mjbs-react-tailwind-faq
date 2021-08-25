import Avatar from './Avatar';

export default function Profile(props) {
   var margin = props.margin === 'right' ? 'mr-8' : 'ml-8';
   return(
      <div className={`flex space-x-4 items-center ${margin}`}>
         <svg width="12" height="9" viewBox="0 0 12 9" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.80584 7.90334C6.40624 8.44716 5.59376 8.44716 5.19416 7.90334L1.10774 2.34214C0.622459 1.68172 1.09404 0.75 1.91358 0.75L10.0864 0.75C10.906 0.75 11.3775 1.68172 10.8923 2.34214L6.80584 7.90334Z" fill="#9CAEBB"/>
         </svg>
         <span className="font-Shabnam text-mainGrayDarkerColor">{props.children}</span>
         <Avatar rounded='full' img={props.img} /> 
      </div>
   )
}