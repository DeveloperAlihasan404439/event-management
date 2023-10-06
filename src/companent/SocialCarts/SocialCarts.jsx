
import { useDataFetch } from '../../pages/utilites/DataFetch';
import SocialCart from '../SocialCart/SocialCart';

const SocialCarts = () => {
    const socialDatas = useDataFetch('/social.json')
    return (
        <div>
            {
                socialDatas?.map(socialData => <SocialCart key={socialData.id} socialData = {socialData}/>)
            }
        </div>
    );
};

export default SocialCarts;