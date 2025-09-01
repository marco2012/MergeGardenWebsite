import React from "react";
import { Link } from "react-router-dom";

export default function PrivacyPolicy() {
    return (
        <div className="min-h-screen bg-background">
            {/* Header */}
            <header className="py-8 border-b border-border">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <Link
                        to="/MergeGardenWebsite"
                        className="inline-flex items-center text-primary hover:text-primary-dark transition-colors mb-4"
                    >
                        <svg
                            className="w-5 h-5 mr-2"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M15 19l-7-7 7-7"
                            />
                        </svg>
                        Back to Home
                    </Link>
                    <h1 className="text-3xl md:text-4xl font-bold text-foreground">
                        Privacy Policy
                    </h1>
                </div>
            </header>

            {/* Content */}
            <main className="py-12">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="prose prose-lg max-w-none">
                        <div className="bg-card rounded-2xl p-8 shadow-lg">
                            <p className="text-muted mb-8">
                                This privacy policy is applicable to the Merge
                                Garden app (hereinafter referred to as
                                &ldquo;Application&rdquo;) for mobile devices,
                                which was developed by Ping Pong Games
                                (hereinafter referred to as &ldquo;Service
                                Provider&rdquo;) as a an Ad Supported service.
                                This service is provided &ldquo;AS IS&rdquo;.
                            </p>

                            <h2 className="text-2xl font-bold text-foreground mb-4">
                                What information does the Application obtain and
                                how is it used?
                            </h2>

                            <h3 className="text-xl font-semibold text-foreground mb-3">
                                User Provided Information
                            </h3>
                            <p className="text-muted mb-6">
                                The Application acquires the information you
                                supply when you download and register the
                                Application. Registration with the Service
                                Provider is not mandatory. However, bear in mind
                                that you might not be able to utilize some of
                                the features offered by the Application unless
                                you register with them.
                            </p>
                            <p className="text-muted mb-6">
                                The Service Provider may also use the
                                information you provided them to contact you
                                from time to time to provide you with important
                                information, required notices and marketing
                                promotions.
                            </p>

                            <h3 className="text-xl font-semibold text-foreground mb-3">
                                Automatically Collected Information
                            </h3>
                            <p className="text-muted mb-6">
                                In addition, the Application may collect certain
                                information automatically, including, but not
                                limited to, the type of mobile device you use,
                                your mobile devices unique device ID, the IP
                                address of your mobile device, your mobile
                                operating system, the type of mobile Internet
                                browsers you use, and information about the way
                                you use the Application.
                            </p>

                            <h2 className="text-2xl font-bold text-foreground mb-4">
                                Does the Application collect precise real time
                                location information of the device?
                            </h2>
                            <p className="text-muted mb-4">
                                This Application does not gather precise
                                information about the location of your mobile
                                device.
                            </p>
                            <p className="text-muted mb-4">
                                This Application collects your device&apos;s
                                location, which helps the Service Provider
                                determine your approximate geographical location
                                and make use of in below ways:
                            </p>
                            <ul className="list-disc list-inside text-muted mb-6 space-y-2">
                                <li>
                                    <strong>Geolocation Services:</strong> The
                                    Service Provider utilizes location data to
                                    provide features such as personalized
                                    content, relevant recommendations, and
                                    location-based services.
                                </li>
                                <li>
                                    <strong>Analytics and Improvements:</strong>{" "}
                                    Aggregated and anonymized location data
                                    helps the Service Provider to analyze user
                                    behavior, identify trends, and improve the
                                    overall performance and functionality of the
                                    Application.
                                </li>
                                <li>
                                    <strong>Third-Party Services:</strong>{" "}
                                    Periodically, the Service Provider may
                                    transmit anonymized location data to
                                    external services. These services assist
                                    them in enhancing the Application and
                                    optimizing their offerings.
                                </li>
                            </ul>

                            <h2 className="text-2xl font-bold text-foreground mb-4">
                                Do third parties see and/or have access to
                                information obtained by the Application?
                            </h2>
                            <p className="text-muted mb-4">
                                Only aggregated, anonymized data is periodically
                                transmitted to external services to aid the
                                Service Provider in improving the Application
                                and their service. The Service Provider may
                                share your information with third parties in the
                                ways that are described in this privacy
                                statement.
                            </p>
                            <p className="text-muted mb-4">
                                Please note that the Application utilizes
                                third-party services that have their own Privacy
                                Policy about handling data. Below are the links
                                to the Privacy Policy of the third-party service
                                providers used by the Application:
                            </p>
                            <ul className="list-disc list-inside text-muted mb-6 space-y-2">
                                <li>
                                    <a
                                        href="https://support.google.com/admob/answer/6128543?hl=en"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-primary hover:text-primary-dark transition-colors"
                                    >
                                        AdMob
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="https://expo.io/privacy"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-primary hover:text-primary-dark transition-colors"
                                    >
                                        Expo
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="https://amplitude.com/privacy"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-primary hover:text-primary-dark transition-colors"
                                    >
                                        Amplitude
                                    </a>
                                </li>
                            </ul>
                            <p className="text-muted mb-4">
                                The Service Provider may disclose User Provided
                                and Automatically Collected Information:
                            </p>
                            <ul className="list-disc list-inside text-muted mb-6 space-y-2">
                                <li>
                                    as required by law, such as to comply with a
                                    subpoena, or similar legal process;
                                </li>
                                <li>
                                    when they believe in good faith that
                                    disclosure is necessary to protect their
                                    rights, protect your safety or the safety of
                                    others, investigate fraud, or respond to a
                                    government request;
                                </li>
                                <li>
                                    with their trusted services providers who
                                    work on their behalf, do not have an
                                    independent use of the information we
                                    disclose to them, and have agreed to adhere
                                    to the rules set forth in this privacy
                                    statement.
                                </li>
                            </ul>

                            <h2 className="text-2xl font-bold text-foreground mb-4">
                                What are my opt-out rights?
                            </h2>
                            <p className="text-muted mb-6">
                                You can halt all collection of information by
                                the Application easily by uninstalling the
                                Application. You may use the standard uninstall
                                processes as may be available as part of your
                                mobile device or via the mobile application
                                marketplace or network.
                            </p>

                            <h2 className="text-2xl font-bold text-foreground mb-4">
                                Data Retention Policy, Managing Your Information
                            </h2>
                            <p className="text-muted mb-6">
                                The Service Provider will retain User Provided
                                data for as long as you use the Application and
                                for a reasonable time thereafter. The Service
                                Provider will retain Automatically Collected
                                information for up to 24 months and thereafter
                                may store it in aggregate. If you&apos;d like
                                the Service Provider to delete User Provided
                                Data that you have provided via the Application,
                                please contact them at{" "}
                                <a
                                    href="mailto:pingponggamesstudio@gmail.com"
                                    className="text-primary hover:text-primary-dark transition-colors"
                                >
                                    pingponggamesstudio@gmail.com
                                </a>{" "}
                                and we will respond in a reasonable time. Please
                                note that some or all of the User Provided Data
                                may be required in order for the Application to
                                function properly.
                            </p>

                            <h2 className="text-2xl font-bold text-foreground mb-4">
                                Children
                            </h2>
                            <p className="text-muted mb-4">
                                The Service Provider does not use the
                                Application to knowingly solicit data from or
                                market to children under the age of 13.
                            </p>
                            <p className="text-muted mb-6">
                                The Application does not address anyone under
                                the age of 13. The Service Provider does not
                                knowingly collect personally identifiable
                                information from children under 13 years of age.
                                In the case the Service Provider discover that a
                                child under 13 has provided personal
                                information, the Service Provider will
                                immediately delete this from their servers. If
                                you are a parent or guardian and you are aware
                                that your child has provided us with personal
                                information, please contact the Service Provider
                                ({" "}
                                <a
                                    href="mailto:pingponggamesstudio@gmail.com"
                                    className="text-primary hover:text-primary-dark transition-colors"
                                >
                                    pingponggamesstudio@gmail.com
                                </a>
                                ) so that they will be able to take the
                                necessary actions.
                            </p>

                            <h2 className="text-2xl font-bold text-foreground mb-4">
                                Security
                            </h2>
                            <p className="text-muted mb-6">
                                The Service Provider are concerned about
                                safeguarding the confidentiality of your
                                information. The Service Provider provide
                                physical, electronic, and procedural safeguards
                                to protect information we process and maintain.
                                For example, we limit access to this information
                                to authorized employees and contractors who need
                                to know that information in order to operate,
                                develop or improve their Application. Please be
                                aware that, although we endeavor provide
                                reasonable security for information we process
                                and maintain, no security system can prevent all
                                potential security breaches.
                            </p>

                            <h2 className="text-2xl font-bold text-foreground mb-4">
                                Changes
                            </h2>
                            <p className="text-muted mb-6">
                                This Privacy Policy may be updated from time to
                                time for any reason. The Service Provider will
                                notify you of any changes to the Privacy Policy
                                by updating this page with the new Privacy
                                Policy. You are advised to consult this Privacy
                                Policy regularly for any changes, as continued
                                use is deemed approval of all changes.
                            </p>
                            <p className="text-muted mb-6">
                                This privacy policy is effective as of
                                2025-09-01
                            </p>

                            <h2 className="text-2xl font-bold text-foreground mb-4">
                                Your Consent
                            </h2>
                            <p className="text-muted mb-6">
                                By using the Application, you are giving your
                                consent to the Service Provider processing of
                                your information as set forth in this Privacy
                                Policy now and as amended by us.
                                &ldquo;Processing,&rdquo; means using cookies on
                                a computer/hand held device or using or touching
                                information in any way, including, but not
                                limited to, collecting, storing, deleting,
                                using, combining and disclosing information.
                            </p>

                            <h2 className="text-2xl font-bold text-foreground mb-4">
                                Contact us
                            </h2>
                            <p className="text-muted mb-6">
                                If you have any questions regarding privacy
                                while using the Application, or have questions
                                about the practices, please contact the Service
                                Provider via email at{" "}
                                <a
                                    href="mailto:pingponggamesstudio@gmail.com"
                                    className="text-primary hover:text-primary-dark transition-colors"
                                >
                                    pingponggamesstudio@gmail.com
                                </a>
                                .
                            </p>

                            <hr className="my-8 border-border" />

                            <p className="text-sm text-muted text-center">
                                This privacy policy page was generated by{" "}
                                <a
                                    href="https://app-privacy-policy-generator.nisrulz.com/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-primary hover:text-primary-dark transition-colors"
                                >
                                    App Privacy Policy Generator
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
