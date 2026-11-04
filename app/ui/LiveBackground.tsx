// Decorative animated background: glowing orbs in the top-right corner
// over a faint grid. Pure CSS (see globals.css), no client-side JS.
const LiveBackground = () => {
  return (
    <div aria-hidden="true" className="live-bg">
      <div className="live-bg-grid" />
      <div className="live-bg-orb live-bg-orb-main" />
      <div className="live-bg-orb live-bg-orb-accent" />
    </div>
  );
};

export default LiveBackground;
