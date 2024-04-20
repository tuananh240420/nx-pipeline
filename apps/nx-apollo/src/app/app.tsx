// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';

import NxWelcome from './nx-welcome';
const data =
  'https://minastik-wis.s3.ap-southeast-1.amazonaws.com/media/WA445090/emaillogo1702006463512_1702279683158.png?fbclid=IwAR3IPBIWqE_hXedzplNtcCOuRkZVpPoVPHKjOtGA0VyjuE-gX5-ec0zcBdg_aem_ARLJvkXxVmCMkVrvNhZx-18lyCd55GJ3tTDHzLBrHg1nyOOOMwlC_7PF_NmYVariboMP8SghmhbFkK0jTBMxmHa_';

const downloadfileglobal = async (data: string, filename: string) => {
  const img = await fetch(data);
  console.log(img);

  const downloadlink = document.createElement('a');
  const linksource = data;
  downloadlink.href = linksource;
  downloadlink.download = filename;
  downloadlink.click();
};
export function App() {
  return (
    <div>
      <button
        style={{ padding: '16px', margin: '100px' }}
        onClick={() => {
          downloadfileglobal(data, 'test');
        }}
      >
        Click me
      </button>
      <NxWelcome title="nx-apollo" />
    </div>
  );
}

export default App;
