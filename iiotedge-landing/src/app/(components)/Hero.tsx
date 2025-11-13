"use client";

import { useEffect, useMemo, useState } from "react";
import type { CSSProperties } from "react";

const EDGE_SIGNAL_PRIMARY = [0.05, 0.12, 0.18, 0.38, 0.5, 0.72, 0.76, 0.82, 0.88, 0.94, 0.98];
const EDGE_SIGNAL_SECONDARY = [0.02, 0.08, 0.16, 0.24, 0.28, 0.35, 0.42, 0.5, 0.52, 0.6, 0.64];
const SOCIAL_LINKS: SocialLink[] = [
  {
    name: "Bluesky",
    href: "https://bsky.app/profile/optimisticweb.com",
    icon: "Bsky",
    background: "#3a83f7",
    monoBackground: "#111111",
  },
  {
    name: "Twitter",
    href: "https://twitter.com/optimisticweb",
    icon: "X",
    background: "#101419",
    monoBackground: "#1f1f1f",
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/@optimisticweb",
    icon: "YT",
    background: "#ff0000",
    monoBackground: "#2a2a2a",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/optimisticweb",
    icon: "IG",
    background: "linear-gradient(-45deg, #feda75, #fa7e1e, #d62976, #962fbf, #4f5bd5)",
    monoBackground: "#373737",
  },
  {
    name: "Behance",
    href: "#",
    icon: "Be",
    background: "#2356f6",
    monoBackground: "#444444",
  },
  {
    name: "Dribbble",
    href: "#",
    icon: "Dr",
    background: "#ea4c89",
    monoBackground: "#515151",
  },
];

export default function Hero() {
  return (
    <>
      <section className="earnwave-hero" aria-labelledby="earnwave-hero-heading">
        <div className="hero-grid" aria-hidden="true" />
        <div className="earnwave-hero__container">
          <div className="earnwave-hero__content">
            <h1 id="earnwave-hero-heading" className="earnwave-hero__title">
              IIoTEdge - Powering the Future of Edge Intelligence
          </h1>
            <p className="earnwave-hero__subtitle">
              Deploy, orchestrate, and optimize industrial AI at scale with rugged edge hardware, zero-trust connectivity, and real-time insight.
            </p>
            <Locks />
            <HeroSocialRail />
          </div>
        </div>
      </section>

      <section className="earnwave-widgets" aria-label="IIoTEdge operational overview">
        <div className="earnwave-widgets__decor" aria-hidden="true" />
        <div className="earnwave-widgets__grid">
          <EdgeOperationsWidget />
          <ConnectorWidget />
          <InsightsWidget />
        </div>
      </section>
    </>
  );
}

type LockShape = "dot" | "dot-lg" | "line" | "lock";

const LOCK_SHAPES: LockShape[] = [
  "dot",
  "line",
  "dot-lg",
  "line",
  "lock",
  "line",
  "dot-lg",
  "line",
  "dot",
];

function Locks() {
  return (
    <div className="earnwave-locks" aria-hidden="true">
      {LOCK_SHAPES.map((shape, index) => {
        if (shape === "line") {
          return <span key={`lock-line-${index}`} className="earnwave-locks__line" />;
        }

        if (shape === "lock") {
          return (
            <span key="lock-center" className="earnwave-locks__center-dot">
              <LockIcon />
            </span>
          );
        }

        const className =
          shape === "dot-lg"
            ? "earnwave-locks__dot earnwave-locks__dot--lg"
            : "earnwave-locks__dot";

        return <span key={`lock-${shape}-${index}`} className={className} />;
      })}
    </div>
  );
}

function LockIcon() {
  return (
    <svg
      className="earnwave-locks__icon"
      viewBox="0 0 24 24"
      role="img"
      aria-hidden="true"
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.25 10.0546V8C5.25 4.27208 8.27208 1.25 12 1.25C15.7279 1.25 18.75 4.27208 18.75 8V10.0546C19.8648 10.1379 20.5907 10.348 21.1213 10.8787C22 11.7574 22 13.1716 22 16C22 18.8284 22 20.2426 21.1213 21.1213C20.2426 22 18.8284 22 16 22H8C5.17157 22 3.75736 22 2.87868 21.1213C2 20.2426 2 18.8284 2 16C2 13.1716 2 11.7574 2.87868 10.8787C3.40931 10.348 4.13525 10.1379 5.25 10.0546ZM6.75 8C6.75 5.10051 9.10051 2.75 12 2.75C14.8995 2.75 17.25 5.10051 17.25 8V10.0036C16.867 10 16.4515 10 16 10H8C7.54849 10 7.13301 10 6.75 10.0036V8ZM14 16C14 17.1046 13.1046 18 12 18C10.8954 18 10 17.1046 10 16C10 14.8954 10.8954 14 12 14C13.1046 14 14 14.8954 14 16Z"
      />
    </svg>
  );
}

function HeroSocialRail() {
  return (
    <div className="hero-social-rail" aria-label="Follow IIoTEdge">
      <ul className="hero-social-rail__list">
        {SOCIAL_LINKS.map((link) => (
          <li key={`${link.name}-rail`} className="hero-social-rail__item" style={{ "--hero-rail-bg": link.monoBackground } as CSSProperties}>
            <a href={link.href} aria-label={link.name} className="hero-social-rail__link">
              <span aria-hidden="true">{link.icon}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Widget({
  children,
  centered,
  enteringDelay = 0,
}: WidgetProps & { enteringDelay?: number }) {
  const [entering, setEntering] = useState(true);

  useEffect(() => {
    if (!entering) return;
    const timeout = window.setTimeout(() => setEntering(false), 2000);
    return () => window.clearTimeout(timeout);
  }, [entering]);

  const className = [
    "earnwave-widget",
    centered && "earnwave-widget--centered",
    entering && "earnwave-widget--entering",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <article
      className={className}
      style={{ animationDelay: entering ? `${enteringDelay}ms` : undefined }}
    >
      {children}
    </article>
  );
}

function EdgeOperationsWidget() {
  const gatewaysOnline = useMemo(() => new Intl.NumberFormat("en-US").format(342), []);
  const telemetryStreams = useMemo(() => new Intl.NumberFormat("en-US").format(12_400), []);

  return (
    <Widget enteringDelay={300}>
      <div className="earnwave-widget__badge">Edge Operations Pulse</div>
      <div className="earnwave-widget__amount earnwave-widget__amount--lg">{gatewaysOnline} Nodes</div>
      <div className="earnwave-widget__label">Field gateways online</div>
      <div className="earnwave-widget__amount">{telemetryStreams} encrypted data streams</div>
      <WidgetGraph ariaLabel="Edge throughput versus anomaly baseline" pointsA={EDGE_SIGNAL_PRIMARY} pointsB={EDGE_SIGNAL_SECONDARY} />
    </Widget>
  );
}

function ConnectorWidget() {
  const [autoSync, setAutoSync] = useState(true);

  return (
    <Widget centered enteringDelay={450}>
      <WidgetCirclesWithRays />
      <h2 className="earnwave-widget__title">Integrate Any Industrial Protocol</h2>
      <Switch
        label="Auto-sync connectors"
        checked={autoSync}
        onChange={(event) => setAutoSync(event.target.checked)}
      />
      <ProtocolBadges />
      <PrimaryActionButton href="#contact">Explore integrations</PrimaryActionButton>
    </Widget>
  );
}

function InsightsWidget() {
  const questions = [
    "Which edge sites are drifting outside SLA?",
    "Where are we seeing abnormal latency today?",
    "Which ML models need retraining this week?",
  ];

  return (
    <Widget enteringDelay={600}>
      <div className="earnwave-widget__graphic-wrap">
        <div className="earnwave-widget__fake-icon">
          <Icon icon="fake-refresh" />
        </div>
        <WidgetCircles />
        <QuestionTags questions={questions} />
      </div>
      <div className="earnwave-widget__actions">
        <p>Surface insights and trigger playbooks in a single command center.</p>
        <IconButton title="View playbooks" icon="caret-right" />
      </div>
    </Widget>
  );
}

function Switch({ label, checked, onChange }: SwitchProps) {
  return (
    <label className="earnwave-switch">
      <span className="earnwave-switch__sr-text">{label}</span>
      <input
        className="earnwave-switch__input"
        role="switch"
        type="checkbox"
        checked={checked}
        onChange={onChange}
        aria-label={label}
      />
    </label>
  );
}

function PrimaryActionButton({ href, children }: PrimaryActionButtonProps) {
  return (
    <a href={href} className="earnwave-btn earnwave-btn--primary">
      {children}
    </a>
  );
}

function IconButton({ title, icon }: IconButtonProps) {
  return (
    <button className="earnwave-btn earnwave-btn--square" type="button" title={title} aria-label={title}>
      <Icon icon={icon} />
    </button>
  );
}

function WidgetCircles() {
  return (
    <>
      <div className="earnwave-widget__circle earnwave-widget__circle--ts1" />
      <div className="earnwave-widget__circle earnwave-widget__circle--ts2" />
      <div className="earnwave-widget__circle earnwave-widget__circle--ts3" />
    </>
  );
}

function WidgetCirclesWithRays() {
  return (
    <div className="earnwave-widget__circle-wrap">
      {Array.from({ length: 8 }).map((_, index) => (
        <div key={`ray-${index}`} className="earnwave-widget__ray" />
      ))}
      <div className="earnwave-widget__circle earnwave-widget__circle--bc1" />
      <div className="earnwave-widget__circle earnwave-widget__circle--bc2" />
      <div className="earnwave-widget__circle earnwave-widget__circle--bc3" />
    </div>
  );
}

function ProtocolBadges() {
  const protocols: ProtocolBadge[] = [
    { name: "OPC UA", emphasis: "front" },
    { name: "Modbus", emphasis: "back" },
    { name: "MQTT", emphasis: "back" },
    { name: "REST", emphasis: "front" },
    { name: "SQL", emphasis: "back" },
  ];

  return (
    <div className="earnwave-source-icons">
      {protocols.map((protocol) => (
        <div
          key={protocol.name}
          className={`earnwave-source-icon earnwave-source-icon--${protocol.emphasis}`}
          role="img"
          aria-label={protocol.name}
        >
          <span>{protocol.name}</span>
        </div>
      ))}
    </div>
  );
}

function Icon({ icon }: IconProps) {
  return (
    <>
      <IconSprites />
      <svg className="earnwave-icon" aria-hidden="true">
        <use href={`#${icon}`} />
      </svg>
    </>
  );
}

function IconSprites() {
  return (
    <svg className="earnwave-sr-only" aria-hidden="true" focusable="false">
      <symbol id="amazon" viewBox="0 0 16 16">
        <circle fill="hsl(36, 100%, 50%)" cx="8" cy="8" r="8" />
        <g fill="none" fillRule="evenodd" transform="matrix(0.625, 0, 0, 0.625, 3, 3)">
          <path d="M 8.468 8.653 C 8.22 9.147 7.796 9.465 7.337 9.573 C 7.267 9.573 7.161 9.608 7.055 9.608 C 6.278 9.608 5.819 9.007 5.819 8.124 C 5.819 6.993 6.49 6.464 7.337 6.216 C 7.796 6.11 8.326 6.074 8.856 6.074 L 8.856 6.499 C 8.856 7.311 8.891 7.946 8.468 8.653 Z M 8.856 4.451 C 8.397 4.486 7.866 4.52 7.337 4.59 C 6.525 4.697 5.713 4.839 5.043 5.157 C 3.737 5.687 2.853 6.817 2.853 8.476 C 2.853 10.562 4.195 11.621 5.891 11.621 C 6.455 11.621 6.914 11.549 7.337 11.445 C 8.009 11.232 8.573 10.843 9.244 10.136 C 9.632 10.666 9.739 10.915 10.409 11.48 C 10.586 11.549 10.763 11.549 10.903 11.445 C 11.327 11.091 12.07 10.455 12.457 10.102 C 12.634 9.96 12.599 9.748 12.492 9.573 C 12.104 9.078 11.715 8.653 11.715 7.7 L 11.715 4.52 C 11.715 3.178 11.822 1.942 10.833 1.024 C 10.022 0.283 8.75 0 7.761 0 L 7.337 0 C 5.537 0.104 3.631 0.882 3.206 3.108 C 3.135 3.391 3.348 3.496 3.489 3.531 L 5.467 3.779 C 5.678 3.743 5.785 3.566 5.819 3.391 C 5.995 2.614 6.631 2.225 7.337 2.153 L 7.479 2.153 C 7.903 2.153 8.362 2.33 8.609 2.684 C 8.891 3.108 8.856 3.673 8.856 4.168 L 8.856 4.451 Z" fill="hsl(215, 14%, 24%)" />
          <path d="M 15.998 11.982 L 15.998 11.981 C 15.991 11.815 15.956 11.688 15.886 11.582 L 15.879 11.572 L 15.87 11.561 C 15.8 11.484 15.732 11.455 15.659 11.423 C 15.439 11.338 15.12 11.293 14.737 11.292 C 14.461 11.292 14.157 11.319 13.851 11.385 L 13.85 11.365 L 13.543 11.467 L 13.537 11.47 L 13.363 11.527 L 13.363 11.534 C 13.159 11.619 12.974 11.724 12.802 11.849 C 12.694 11.929 12.606 12.036 12.601 12.199 C 12.598 12.287 12.643 12.389 12.718 12.449 C 12.792 12.509 12.879 12.53 12.955 12.53 C 12.973 12.53 12.99 12.529 13.005 12.526 L 13.02 12.525 L 13.031 12.523 C 13.182 12.491 13.401 12.47 13.658 12.434 C 13.878 12.409 14.111 12.392 14.313 12.392 C 14.456 12.391 14.585 12.401 14.674 12.42 C 14.718 12.429 14.751 12.44 14.769 12.45 C 14.775 12.452 14.78 12.455 14.783 12.456 C 14.786 12.469 14.792 12.501 14.791 12.545 C 14.793 12.714 14.722 13.029 14.623 13.336 C 14.527 13.642 14.41 13.95 14.333 14.154 C 14.314 14.201 14.302 14.253 14.302 14.31 C 14.3 14.392 14.334 14.491 14.405 14.557 C 14.475 14.623 14.565 14.649 14.641 14.649 L 14.644 14.649 C 14.757 14.648 14.853 14.603 14.936 14.538 C 15.717 13.836 15.989 12.714 16 12.083 L 15.998 11.982 Z M 13.683 12.955 C 13.603 12.954 13.521 12.973 13.445 13.009 C 13.359 13.043 13.272 13.082 13.189 13.117 L 13.068 13.168 L 12.91 13.231 L 12.91 13.233 C 11.193 13.929 9.389 14.338 7.721 14.374 C 7.659 14.376 7.597 14.376 7.538 14.376 C 4.913 14.377 2.772 13.16 0.612 11.96 C 0.537 11.92 0.459 11.899 0.384 11.899 C 0.287 11.899 0.187 11.936 0.115 12.004 C 0.042 12.072 -0.001 12.171 0 12.272 C -0.001 12.403 0.07 12.523 0.168 12.601 C 2.196 14.362 4.418 15.998 7.406 16 C 7.465 16 7.524 15.998 7.583 15.997 C 9.484 15.955 11.634 15.312 13.303 14.264 L 13.313 14.257 C 13.532 14.126 13.75 13.977 13.956 13.813 C 14.084 13.718 14.172 13.569 14.172 13.415 C 14.167 13.141 13.934 12.955 13.683 12.955 Z" fill="hsl(0, 0%, 100%)" />
        </g>
      </symbol>
      <symbol id="apple" viewBox="0 0 16 16">
        <path
          fill="currentColor"
          d="M 10.457 2.551 C 11.04 1.875 11.434 0.934 11.326 -0.003 C 10.485 0.029 9.468 0.534 8.866 1.209 C 8.324 1.808 7.852 2.766 7.979 3.684 C 8.917 3.754 9.874 3.228 10.457 2.551 M 12.56 8.496 C 12.583 10.918 14.776 11.724 14.8 11.734 C 14.783 11.791 14.45 12.882 13.645 14.01 C 12.948 14.985 12.226 15.955 11.088 15.976 C 9.97 15.996 9.61 15.341 8.331 15.341 C 7.053 15.341 6.653 15.955 5.595 15.996 C 4.497 16.035 3.659 14.941 2.958 13.97 C 1.522 11.984 0.426 8.356 1.899 5.908 C 2.63 4.694 3.937 3.923 5.355 3.904 C 6.434 3.884 7.452 4.599 8.112 4.599 C 8.771 4.599 10.009 3.739 11.31 3.866 C 11.854 3.887 13.384 4.076 14.364 5.452 C 14.285 5.499 12.54 6.472 12.56 8.496"
        />
      </symbol>
      <symbol id="caret-right" viewBox="0 0 16 16">
        <polyline
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          points="6 4,10 8,6 12"
        />
      </symbol>
      <symbol id="close" viewBox="0 0 16 16">
        <g stroke="currentColor" strokeWidth="1">
          <polyline points="1 1,15 15" />
          <polyline points="1 15,15 1" />
        </g>
      </symbol>
      <symbol id="fake-refresh" viewBox="0 0 32 32">
        <rect fill="var(--gray700)" rx="8" ry="8" width="32" height="32" />
        <path
          fill="hsl(0, 0%, 100%)"
          d="M 7.996 0.765 C 7.997 0.316 8.483 0.037 8.871 0.261 C 8.885 0.269 8.899 0.278 8.911 0.286 L 12.356 2.671 C 12.692 2.903 12.692 3.399 12.356 3.63 L 8.911 6.015 C 8.543 6.271 8.035 6.031 7.998 5.584 C 7.997 5.568 7.996 5.553 7.996 5.537 L 7.996 3.734 C 3.808 3.734 1.19 8.269 3.284 11.896 C 5.378 15.524 10.614 15.524 12.708 11.896 C 13.186 11.069 13.437 10.13 13.437 9.175 C 13.437 8.577 14.086 8.203 14.603 8.502 C 14.844 8.641 14.992 8.898 14.992 9.175 C 14.992 14.561 9.162 17.927 4.498 15.234 C -0.166 12.541 -0.166 5.809 4.498 3.116 C 5.561 2.502 6.768 2.179 7.996 2.179 L 7.996 0.765 Z"
          transform="matrix(0, 1, -1, 0, 24, 8)"
        />
      </symbol>
      <symbol id="google" viewBox="0 0 16 16">
        <path
          fill="currentColor"
          d="M 8.311 7.279 L 8.311 9.464 L 13.535 9.464 C 13.449 10.533 13.012 11.486 12.341 12.222 L 12.344 12.218 C 11.372 13.208 10.021 13.822 8.526 13.822 C 8.45 13.822 8.375 13.82 8.3 13.817 L 8.311 13.817 C 5.145 13.816 2.58 11.25 2.58 8.084 C 2.58 8.056 2.58 8.029 2.58 8.003 L 2.58 8.007 C 2.58 7.984 2.58 7.957 2.58 7.93 C 2.58 4.764 5.145 2.198 8.311 2.196 C 8.332 2.196 8.357 2.196 8.383 2.196 C 9.885 2.196 11.248 2.792 12.249 3.761 L 12.247 3.76 L 13.785 2.222 C 12.417 0.85 10.526 0 8.436 0 C 8.392 0 8.349 0.001 8.305 0.001 L 8.311 0.001 C 8.31 0.001 8.309 0.001 8.307 0.001 C 3.869 0.001 0.263 3.567 0.2 7.991 L 0.2 7.997 C 0.263 12.427 3.869 15.994 8.307 15.994 C 8.309 15.994 8.31 15.994 8.312 15.994 C 8.402 15.997 8.507 16 8.613 16 C 10.685 16 12.556 15.14 13.889 13.757 L 13.891 13.755 C 15.067 12.473 15.787 10.758 15.787 8.874 C 15.787 8.794 15.786 8.714 15.783 8.635 L 15.784 8.646 C 15.784 8.618 15.784 8.583 15.784 8.549 C 15.784 8.1 15.742 7.66 15.661 7.234 L 15.668 7.278 L 8.311 7.279 Z"
        />
      </symbol>
      <symbol id="hamburger" viewBox="0 0 32 32">
        <g fill="none" stroke="currentColor" strokeWidth="4">
          <polyline points="0 2,32 2" />
          <polyline points="0 10,32 10" />
        </g>
        <text fill="currentColor" fontSize={11} textAnchor="middle" x="16" y="29">
          Menu
        </text>
      </symbol>
      <symbol id="lock" viewBox="0 0 24 24">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M5.25 10.0546V8C5.25 4.27208 8.27208 1.25 12 1.25C15.7279 1.25 18.75 4.27208 18.75 8V10.0546C19.8648 10.1379 20.5907 10.348 21.1213 10.8787C22 11.7574 22 13.1716 22 16C22 18.8284 22 20.2426 21.1213 21.1213C20.2426 22 18.8284 22 16 22H8C5.17157 22 3.75736 22 2.87868 21.1213C2 20.2426 2 18.8284 2 16C2 13.1716 2 11.7574 2.87868 10.8787C3.40931 10.348 4.13525 10.1379 5.25 10.0546ZM6.75 8C6.75 5.10051 9.10051 2.75 12 2.75C14.8995 2.75 17.25 5.10051 17.25 8V10.0036C16.867 10 16.4515 10 16 10H8C7.54849 10 7.13301 10 6.75 10.0036V8ZM14 16C14 17.1046 13.1046 18 12 18C10.8954 18 10 17.1046 10 16C10 14.8954 10.8954 14 12 14C13.1046 14 14 14.8954 14 16Z"
          fill="currentColor"
        />
      </symbol>
      <symbol id="logo" viewBox="0 0 16 16">
        <g fill="currentColor">
          <path d="M 8.933 0.206 C 8.933 0.206 8.404 0.14 7.973 0.631 C 7.534 1.131 7.449 2.12 7.377 2.586 L 6.493 8.186 C 6.446 8.652 6.758 9.013 7.087 9.286 C 7.364 9.516 7.68 9.585 8.147 9.585 L 11.413 9.585 C 11.879 9.585 12.115 9.537 12.448 9.338 C 12.744 9.162 13.023 8.675 13.023 8.675 C 13.237 8.282 15.08 3.234 15.08 3.234 C 15.251 2.798 15.598 1.771 15.381 1.138 C 15.237 0.717 14.863 0.275 14.396 0.244 C 9.2 0.2 8.933 0.206 8.933 0.206 Z" />
          <path d="M 1.684 5.619 C 1.684 5.619 0.743 5.593 0.607 6.839 L 0.453 10.567 C 0.437 11.033 0.541 11.28 0.949 11.621 C 1.244 11.868 2.006 11.887 2.006 11.887 C 2.006 11.887 3.308 11.917 3.705 11.875 C 4.237 11.819 4.749 11.195 4.827 10.729 L 5.33 7.486 C 5.408 7.019 5.53 6.371 5.144 6.029 C 4.624 5.568 4.244 5.619 3.777 5.619 L 1.684 5.619 Z" />
          <path d="M 5.803 12.534 L 5.479 14.571 C 5.387 15.295 5.877 15.69 6.343 15.768 L 7.796 15.78 C 8.317 15.766 8.608 15.606 8.825 15.081 L 9.803 12.392 C 10.029 11.565 9.819 11.182 9.023 11.152 C 9.023 11.152 7.874 11.102 7.029 11.126 C 5.952 11.156 5.803 12.534 5.803 12.534 Z" />
        </g>
      </symbol>
      <symbol id="netflix" viewBox="0 0 16 16">
        <circle fill="hsl(0, 0%, 0%)" cx="8" cy="8" r="8" />
        <g fill="hsl(357, 93%, 36%)">
          <path d="M 8.79 3.01 L 8.79 5.22 L 8.79 7.42 L 8.61 6.91 L 8.37 11.83 C 8.6 12.48 8.72 12.83 8.72 12.84 C 8.72 12.84 8.86 12.84 9.02 12.85 C 9.5 12.87 10.09 12.92 10.55 12.98 C 10.65 13 10.74 13 10.75 13 C 10.75 12.99 10.76 10.74 10.75 8 L 10.75 3.01 L 8.79 3.01 Z" />
          <path d="M 5.25 3 L 5.25 8 C 5.25 10.74 5.25 12.99 5.26 13 C 5.26 13 5.43 12.98 5.64 12.96 C 5.84 12.94 6.12 12.91 6.26 12.9 C 6.48 12.88 7.12 12.84 7.2 12.84 C 7.23 12.84 7.23 12.73 7.23 10.72 L 7.23 8.6 L 7.39 9.05 C 7.41 9.12 7.42 9.14 7.44 9.21 L 7.67 4.29 C 7.63 4.15 7.66 4.22 7.6 4.06 C 7.41 3.52 7.24 3.06 7.24 3.04 L 7.23 3 L 5.25 3 Z" />
        </g>
        <path
          fill="hsl(357, 92%, 47%)"
          d="M 5.25 3 L 7.23 8.61 L 7.23 8.6 L 7.39 9.05 C 8.26 11.51 8.72 12.83 8.72 12.84 C 8.72 12.84 8.86 12.84 9.02 12.85 C 9.5 12.87 10.09 12.92 10.55 12.98 C 10.65 13 10.74 13 10.75 13 L 8.79 7.42 L 8.61 6.91 C 8.42 6.41 8.31 6.07 7.59 4.06 C 7.4 3.52 7.24 3.06 7.23 3.04 L 7.22 3 L 6.24 3 L 5.25 3 Z"
        />
      </symbol>
      <symbol id="spotify" viewBox="0 0 48 48">
        <circle fill="hsl(0, 0%, 0%)" cx="24" cy="24" r="22" />
        <path
          fill="hsl(145, 100%, 43%)"
          d="M 38.16 21.36 C 30.48 16.8 17.64 16.32 10.32 18.6 C 9.12 18.96 7.92 18.24 7.56 17.16 C 7.2 15.96 7.92 14.76 9 14.4 C 17.52 11.88 31.56 12.36 40.44 17.64 C 41.52 18.24 41.88 19.68 41.28 20.76 C 40.68 21.6 39.24 21.96 38.16 21.36 M 37.92 28.08 C 37.32 28.92 36.24 29.28 35.4 28.68 C 28.92 24.72 19.08 23.52 11.52 25.92 C 10.56 26.16 9.48 25.68 9.24 24.72 C 9 23.76 9.48 22.68 10.44 22.44 C 19.2 19.8 30 21.12 37.44 25.68 C 38.16 26.04 38.52 27.24 37.92 28.08 M 35.04 34.68 C 34.56 35.4 33.72 35.64 33 35.16 C 27.36 31.68 20.28 30.96 11.88 32.88 C 11.04 33.12 10.32 32.52 10.08 31.8 C 9.84 30.96 10.44 30.24 11.16 30 C 20.28 27.96 28.2 28.8 34.44 32.64 C 35.28 33 35.4 33.96 35.04 34.68 M 24 0 C 10.8 0 0 10.8 0 24 C 0 37.2 10.8 48 24 48 C 37.2 48 48 37.2 48 24 C 48 10.8 37.32 0 24 0"
        />
      </symbol>
      <symbol id="uber" viewBox="0 0 192 192">
        <circle fill="hsl(0, 0% ,0%)" cx="96" cy="96" r="96" />
        <g fill="none" stroke="hsl(0, 0%, 100%)" strokeLinecap="round" strokeWidth="8">
          <path d="M54.24 119.13v-32.9m13.84 32.9V72.87" />
          <circle cx="84.53" cy="102.68" r="16.45" />
          <path d="M160.22 119.13V87.99m11.78 0h0c-1.9 0-3.77.45-5.45 1.32-2.73 1.42-6.33 3.97-6.33 7.51" />
          <g strokeLinejoin="round">
            <path d="M20 72.87v31.73c.77 8.11 8.14 14.41 16.88 14.52 8.91.12 16.58-6.25 17.36-14.52V72.87" />
            <path d="M142.57 113.99c-3 3.17-7.24 5.14-11.95 5.14-9.09 0-16.45-7.37-16.45-16.45s7.37-16.45 16.45-16.45 16.45 7.37 16.45 16.45h-32.9" />
          </g>
        </g>
      </symbol>
    </svg>
  );
}

function WidgetGraph({ ariaLabel, pointsA, pointsB }: WidgetGraphProps) {
  const graphWidth = 160;
  const graphHeight = 120;
  const margin = 8;
  const plotWidth = graphWidth - margin * 2;
  const plotHeight = graphHeight - margin * 2;

  const convertPoints = (points: number[]) =>
    points
      .map((point, index) => {
        const x = (index / (points.length - 1 || 1)) * plotWidth;
        const y = plotHeight - point * plotHeight;
        return `${x} ${y}`;
      })
      .join(",");

  const pointsAString = useMemo(() => convertPoints(pointsA), [pointsA]);
  const pointsBString = useMemo(() => convertPoints(pointsB), [pointsB]);

  return (
    <svg
      role="img"
      aria-label={ariaLabel}
      className="earnwave-widget__graph"
      viewBox={`0 0 ${graphWidth} ${graphHeight}`}
      width={graphWidth}
      height={graphHeight}
    >
      <g
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        transform={`translate(${margin}, ${margin})`}
      >
        <polyline points={pointsBString} opacity={0.1} />
        <polyline points={pointsAString} />
      </g>
    </svg>
  );
}

function QuestionTags({ questions }: QuestionTagsProps) {
  const charsPerLine = 22;

  const questionData = questions.slice(0, 3).map((question, index) => {
    const words = question.split(" ");
    const lines: string[] = [];
    let line = "";

    words.forEach((word) => {
      const next = line ? `${line} ${word}` : word;
      if (next.length > charsPerLine) {
        lines.push(line);
        line = word;
      } else {
        line = next;
      }
    });

    if (line) {
      lines.push(line);
    }

    return {
      lines,
      fill: QUESTION_TAG_CONFIG[index]?.fill,
      path: QUESTION_TAG_CONFIG[index]?.path,
    };
  });

  return (
    <svg
      role="img"
      aria-label={questions.join(" ")}
      className="earnwave-question-tags"
      viewBox="0 0 170 140"
    >
      {questionData.map((question, index) => (
        <g
          key={QUESTION_TAG_CONFIG[index]?.id ?? index}
          className="earnwave-question-tags__tag"
          transform={`translate(${27 + index * 22}, ${85 - index * 35})`}
        >
          <path
            fill={question.fill}
            d="M 10 0 L 88 0 C 93.523 0 98 4.477 98 10 L 98 46 C 98 51.523 93.523 56 88 56 L 10 56 C 4.477 56 0 51.523 0 46 L 0 10 C 0 4.477 4.477 0 10 0 Z M 12 9 C 10.343 9 9 10.343 9 12 C 9 13.657 10.343 15 12 15 C 13.657 15 15 13.657 15 12 C 15 10.343 13.657 9 12 9 Z"
          />
          <path
            fill="none"
            stroke="currentColor"
            d={question.path ?? ""}
            transform="translate(-17, -14)"
            opacity={0.2}
          />
          {question.lines.map((lineText, lineIndex) => (
            <text key={lineText} x={24} y={36 + lineIndex * 9.5}>
              {lineText}
            </text>
          ))}
        </g>
      ))}
    </svg>
  );
}

const QUESTION_TAG_CONFIG: QuestionTagConfig[] = [
  {
    id: "tag-1",
    fill: "rgba(59,130,246,0.08)",
    path: "M 29 26 C 25.653 23.601 18.93 15.708 16.35 18.477 C 13.129 21.935 16.102 27.554 15.404 31.249 C 14.3 37.095 3.39 31.262 5.944 35.269 C 8.062 38.591 9.416 39.006 9.019 43.311 C 8.447 49.519 -10.687 57.996 12.33 59.865",
  },
  {
    id: "tag-2",
    fill: "rgba(59,130,246,0.12)",
    path: "M 29.017 25.818 C 30.375 23.951 32.562 14.802 35.641 15.175 C 38.47 15.517 34.727 32.15 39.659 38.824 C 43.782 44.403 57.097 45.277 65 38.5",
  },
  {
    id: "tag-3",
    fill: "rgba(59,130,246,0.18)",
    path: "M 29 26 C 27.518 11.629 28.743 1.957 35.4 1 C 41.297 0.618 41.868 7.332 47.5 8 C 56.814 7.918 60.666 2.891 70 3 C 75.133 3.06 77.909 5.467 80 10",
  },
];

type PrimaryActionButtonProps = {
  href: string;
  children: React.ReactNode;
};

type ProtocolBadge = {
  name: string;
  emphasis: "front" | "back";
};

type SocialLink = {
  name: string;
  href: string;
  icon: string;
  background: string;
  monoBackground: string;
};

type IconProps = {
  icon: string;
};

type IconButtonProps = {
  title: string;
  icon: string;
};

type QuestionTagsProps = {
  questions: string[];
};

type QuestionTagConfig = {
  id: string;
  fill: string;
  path: string;
};

type SwitchProps = {
  label: string;
  checked: boolean;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
};

type WidgetProps = {
  children: React.ReactNode;
  centered?: boolean;
};

type WidgetGraphProps = {
  ariaLabel: string;
  pointsA: number[];
  pointsB: number[];
};
