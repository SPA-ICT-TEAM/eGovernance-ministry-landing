export const ContactInfo = ({address, phone, email, officeHours}) => {
    return (
        <div className="py-8 flex flex-col md:flex-row justify-around px-4 border-b-2">
            <p className="flex flex-col mb-4 md:mb-0">
                <span className="font-semibold">Our Office Address</span>
                <span>{address}</span>
            </p>
            <p className="flex flex-col mb-4 md:mb-0">
                <span className="font-semibold">Phone Number</span>
                <span>{phone}</span>
            </p>
            <p className="flex flex-col mb-4 md:mb-0">
                <span className="font-semibold">e-Mail Address</span>
                <span>{email}</span>
            </p>
            <p className="flex flex-col mb-4 md:mb-0">
                <span className="font-semibold">Office Hours</span>
                <span>{officeHours}</span>
            </p>
        </div>
    );
}