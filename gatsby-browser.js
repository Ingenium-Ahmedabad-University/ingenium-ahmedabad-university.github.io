import './src/css/custom.css';
import './src/css/tailwind.css';

export const onClientEntry = () => {
  document.getElementById('loader-wrapper').style.display = 'block';
};
export const onInitialClientRender = () => {
  setTimeout(() => {
    document.getElementById('loader-wrapper').style.display = 'none';
  }, 500);
};
