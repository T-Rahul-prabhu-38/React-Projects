export default function Tabs({children,buttons,ButtonsContainer}) {

    // const ButtonContainer = buttonsContainer
    return(
        <>
            <ButtonsContainer>
            {buttons}
            </ButtonsContainer>
            {children}
        </>
    )
}