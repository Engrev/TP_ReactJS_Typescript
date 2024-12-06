type AlertType = {
    type?: "info" | "warning" | "danger";
    children: React.ReactNode;
}

/**
 * Renders an alert component with a specified type and child elements.
 *
 * @param {Object} props - The properties object.
 * @param {string} [props.type='info'] - The type of the alert, used to determine styling. Defaults to 'info'.
 * @param {React.ReactNode} props.children - The content to be displayed within the alert.
 * @return {JSX.Element} A JSX element representing an alert box.
 */
export default function Alert({type = 'info', children}: AlertType) {
    return <div className={`alert alert-${type}`} role="alert">{children}</div>
}