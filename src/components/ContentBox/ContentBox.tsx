import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

export function ContentBox() {
    return (
        <Container className="h-[80vh] w-screen overflow-auto no-scrollbar relative" >
            <Box
                className="sticky top-0 left-0 w-full h-1/4 z-999"
                style={{
                    backgroundImage: 'linear-gradient(to bottom, var(--color-dark-purple-950), transparent)',
                }}
            ></Box>
            <Box
                className=""
                style={{
                    marginTop: '-10%',
                    marginBottom: '-10%'
                }}
            >
                {/* Content */}
            </Box>
            <Box
                className="sticky bottom-0 left-0 w-full h-1/4 z-999 m-0 "
                style={{
                    backgroundImage: 'linear-gradient(to top, var(--color-dark-purple-950), transparent)',
                }}
            ></Box>
        </Container>
    )
}

export default ContentBox;