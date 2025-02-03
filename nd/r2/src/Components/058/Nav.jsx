import Link from './Link';

export default function Nav() {

    return (
        <nav className="top-menu">
            <ul>
                <li><Link href="">Home</Link></li>
                <li><Link href="shop">Shop</Link></li>
                <li><Link href="contacts">Contacts</Link></li>
                <li><Link href="about">About</Link></li>
            </ul>
        </nav>
    );

}