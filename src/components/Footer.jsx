export default function Footer() {

const githubURL = "https://github.com/v-cazeau/react-counter-app"; 

    return (
        <footer>
            <p><small>&copy; 2023 </small></p>
            <a href = {githubURL} target="_blank" rel="noreferrer">See Code in Github</a>
        </footer>
    )

}