import { FaMapMarkerAlt } from 'react-icons/fa';
import { BsTelephoneFill, BsClockFill } from 'react-icons/bs';

const data = [
    {
        icon: <BsClockFill size={25} />,
        title: 'Working Hours',
        body: <>
            <span style={{ fontSize: 20 }} className={`d-block w-100`}>4357 Oakmound Drive, Chicago - Illinois , IL - 60617</span>
        </>
    },
    {
        icon: <FaMapMarkerAlt size={25} />,
        title: 'Adress',
        body: <>
            <span style={{ fontSize: 20 }} className={`d-block w-100`}><strong>Monday, Wednesday:</strong> 8:00 AM to 5:30 PM</span>
            <span style={{ fontSize: 20 }} className={`d-block w-100`}><strong>Thursday, Friday:</strong> 9:00 AM to 6:00 PM</span>
            <span style={{ fontSize: 20 }} className={`d-block w-100`}><strong>Saturday, Sunday:</strong> Closed</span>
        </>
    },
    {
        icon: <BsTelephoneFill size={25} />,
        title: 'Contact',
        body: <>
            <span style={{ fontSize: 20 }} className={`d-block w-100`}><strong>Monday, Wednesday:</strong> 8:00 AM to 5:30 PM</span>
            <span style={{ fontSize: 20 }} className={`d-block w-100`}><strong>Thursday, Friday:</strong> 9:00 AM to 6:00 PM</span>
            <span style={{ fontSize: 20 }} className={`d-block w-100`}><strong>Saturday, Sunday:</strong> Closed</span>
        </>
    },
]

export default data;