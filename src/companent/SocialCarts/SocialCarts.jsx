
import { useDataFetch } from '../../pages/utilites/DataFetch';
import SocialCart from '../SocialCart/SocialCart';

const SocialCarts = () => {
    const socialDatas = useDataFetch('/social.json')
    return (
        <div className='w-11/12 mx-auto pt-10'>
            <h1 className='text-center text-3xl font-bold text-orange-500'>Oure Services</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-10'>
            {
                socialDatas?.map(socialData => <SocialCart key={socialData.id} socialData = {socialData}/>)
            }
        </div>
        </div>
    );
};

export default SocialCarts;