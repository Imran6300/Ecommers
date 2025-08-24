import React from "react";
import styles from "./Footer.module.css";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaPinterest,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.topLinks}>
        <div>
          <h3 className={styles.heading}>Shop</h3>
          <ul className={styles.linkList}>
            <li>
              <a href="#">Men</a>
            </li>
            <li>
              <a href="#">Women</a>
            </li>
            <li>
              <a href="#">Kids</a>
            </li>
            <li>
              <a href="#">Accessories</a>
            </li>
            <li>
              <a href="#">New Arrivals</a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className={styles.heading}>Customer Service</h3>
          <ul className={styles.linkList}>
            <li>
              <a href="#">Contact Us</a>
            </li>
            <li>
              <a href="#">Returns</a>
            </li>
            <li>
              <a href="#">Shipping Info</a>
            </li>
            <li>
              <a href="#">Order Tracking</a>
            </li>
            <li>
              <a href="#">FAQ</a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className={styles.heading}>About</h3>
          <ul className={styles.linkList}>
            <li>
              <a href="#">Our Story</a>
            </li>
            <li>
              <a href="#">Sustainability</a>
            </li>
            <li>
              <a href="#">Careers</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className={styles.heading}>Policies</h3>
          <ul className={styles.linkList}>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Terms & Conditions</a>
            </li>
            <li>
              <a href="#">Refund Policy</a>
            </li>
          </ul>
        </div>
      </div>

      <div className={styles.newsletterSection}>
        <div className={styles.newsletter}>
          <h3 className={styles.heading}>Stay in Touch</h3>
          <p className={styles.newsText}>
            Subscribe for latest fashion drops & offers
          </p>
          <div className={styles.inputGroup}>
            <input
              type="email"
              placeholder="Enter your email"
              className={styles.emailInput}
            />
            <button className={styles.subscribeBtn}>Subscribe</button>
          </div>
        </div>

        <div className={styles.socials}>
          <a href="#">
            <FaFacebookF />
          </a>
          <a href="#">
            <FaInstagram />
          </a>
          <a href="#">
            <FaTwitter />
          </a>
          <a href="#">
            <FaPinterest />
          </a>
        </div>
      </div>

      <div className={styles.bottom}>
        © 2025 YourBrand. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
