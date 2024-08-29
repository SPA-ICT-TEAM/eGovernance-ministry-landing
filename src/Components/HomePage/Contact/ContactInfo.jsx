

export const ContactInfo = ({address, phone, email, officeHours}) => {
    return (
        <div className="py-8 flex flex-row justify-around px-4">
            <p className="flex flex-col">
                <span className="font-semibold">Our Office Address</span>
                <span>{address}</span>
            </p>
            <p className="flex flex-col">
                <span className="font-semibold">Phone Number</span>
                <span>{phone}</span>
            </p>
        </div>
    );
}