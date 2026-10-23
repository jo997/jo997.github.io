"""Short visual explainers for the publication pages.

Render with ManimGL (https://github.com/3b1b/manim):
    manimgl manim/paper_explainers.py ConfidenceGating -w
"""

from manimlib import *


NAVY = "#071A2B"
TEAL = "#24D1B5"
MINT = "#8CF3DD"
BLUE = "#69A7FF"
AMBER = "#F5B942"
CORAL = "#FF6B6B"
PAPER = "#EAF3F7"
MUTED = "#8BA5B5"


class PaperScene(Scene):
    def setup(self):
        self.camera.background_color = NAVY

    def label(self, text, size=30, color=PAPER):
        return Text(text, font="DejaVu Sans", font_size=size, color=color)

    def title(self, text):
        title = self.label(text, 34, PAPER).to_edge(UP, buff=0.35)
        line = Line(LEFT * 6.2, RIGHT * 6.2, color=TEAL, stroke_width=2).next_to(title, DOWN, buff=0.2)
        self.play(FadeIn(title, UP), ShowCreation(line), run_time=0.8)
        return VGroup(title, line)

    def pill(self, text, color=TEAL):
        word = self.label(text, 22, color)
        box = RoundedRectangle(
            width=word.get_width() + 0.5,
            height=word.get_height() + 0.28,
            corner_radius=0.15,
            stroke_color=color,
            stroke_width=2,
        ).move_to(word)
        return VGroup(box, word)

    def finish(self, message):
        footer = self.pill(message, TEAL).to_edge(DOWN, buff=0.35)
        self.play(FadeIn(footer, UP), run_time=0.7)
        self.wait(1.6)


class ConfidenceGating(PaperScene):
    def construct(self):
        self.title("Confidence-gated autonomy")
        axis = NumberLine(x_range=[0, 1, 0.2], width=9, color=MUTED).shift(DOWN * 0.2)
        low = self.label("ACT", 24, TEAL).next_to(axis, DOWN, buff=0.45).shift(LEFT * 3.5)
        high = self.label("DEFER", 24, AMBER).next_to(axis, DOWN, buff=0.45).shift(RIGHT * 3.4)
        threshold = Triangle(fill_color=PAPER, fill_opacity=1, stroke_width=0).scale(0.13).rotate(PI).next_to(axis.n2p(0.62), UP, buff=0.12)
        threshold_label = self.label("threshold", 20, PAPER).next_to(threshold, UP, buff=0.08)
        self.play(ShowCreation(axis), FadeIn(low), FadeIn(high), FadeIn(threshold), FadeIn(threshold_label))

        values = [0.09, 0.18, 0.28, 0.39, 0.52, 0.67, 0.76, 0.88]
        errors = {2, 5, 7}
        dots = VGroup()
        for i, value in enumerate(values):
            color = CORAL if i in errors else BLUE
            dot = Dot(axis.n2p(value) + UP * (0.45 + 0.18 * (i % 2)), radius=0.105, color=color)
            dots.add(dot)
        legend = VGroup(
            Dot(color=BLUE, radius=0.08),
            self.label("correct", 19, MUTED),
            Dot(color=CORAL, radius=0.08),
            self.label("error", 19, MUTED),
        ).arrange(RIGHT, buff=0.2).to_corner(UL, buff=0.45).shift(DOWN * 0.8)
        self.play(LaggedStartMap(FadeIn, dots, lag_ratio=0.1), FadeIn(legend))

        simple = self.pill("softmax", BLUE).shift(LEFT * 3 + UP * 1.8)
        ensemble = self.pill("ensemble", BLUE).shift(UP * 1.8)
        dropout = self.pill("MC dropout", BLUE).shift(RIGHT * 3 + UP * 1.8)
        self.play(FadeIn(simple), FadeIn(ensemble), FadeIn(dropout))
        arrows = VGroup(*[Arrow(p.get_bottom(), threshold_label.get_top(), buff=0.15, color=MUTED, stroke_width=2) for p in [simple, ensemble, dropout]])
        self.play(LaggedStartMap(GrowArrow, arrows, lag_ratio=0.12))
        self.play(threshold.animate.shift(LEFT * 1.25), threshold_label.animate.shift(LEFT * 1.25), run_time=1.3)
        self.play(threshold.animate.shift(RIGHT * 2.1), threshold_label.animate.shift(RIGHT * 2.1), run_time=1.3)
        self.finish("The threshold changes outcomes more than estimator complexity")


class WhenToAct(PaperScene):
    def construct(self):
        self.title("When should an assistive robot act?")
        person = Circle(radius=0.34, color=BLUE).shift(LEFT * 4 + UP * 0.75)
        body = Line(person.get_bottom(), person.get_bottom() + DOWN * 1.25, color=BLUE, stroke_width=5)
        arm = Line(body.get_center(), body.get_center() + RIGHT * 1.2 + UP * 0.4, color=BLUE, stroke_width=5)
        intent = Arrow(arm.get_end(), arm.get_end() + RIGHT * 1.15 + UP * 0.3, color=MINT, buff=0.05)
        self.play(ShowCreation(person), ShowCreation(body), ShowCreation(arm), GrowArrow(intent))

        gauge = Arc(start_angle=PI, angle=-PI, radius=2.05, color=MUTED, stroke_width=12).shift(RIGHT * 2.2)
        safe = Arc(start_angle=PI, angle=-0.34 * PI, radius=2.05, color=TEAL, stroke_width=12).shift(RIGHT * 2.2)
        needle = Line(gauge.get_center(), gauge.get_center() + 1.7 * LEFT, color=PAPER, stroke_width=5)
        confidence_value = ValueTracker(0.42)
        confidence = DecimalNumber(0.42, num_decimal_places=2, color=PAPER).scale(0.8).move_to(gauge.get_center() + DOWN * 0.65)
        state = self.pill("HOLD", AMBER).next_to(confidence, DOWN, buff=0.35)
        self.play(ShowCreation(gauge), ShowCreation(safe), ShowCreation(needle), FadeIn(confidence), FadeIn(state))

        confidence.add_updater(lambda m: m.set_value(confidence_value.get_value()))
        target = Line(gauge.get_center(), gauge.get_center() + 1.7 * rotate_vector(LEFT, PI * 0.82), color=PAPER, stroke_width=5)
        self.play(Transform(needle, target), confidence_value.animate.set_value(0.91), run_time=2.2)
        confidence.clear_updaters()
        act = self.pill("ACT", TEAL).move_to(state)
        robot_arm = Line(intent.get_end(), intent.get_end() + RIGHT * 1.4, color=TEAL, stroke_width=8)
        self.play(Transform(state, act), ShowCreation(robot_arm))
        self.finish("Calibration turns confidence into an interpretable safety rule")


class GPCAExplainer(PaperScene):
    def cloud(self, center, color, offsets):
        return VGroup(*[Dot(center + np.array([x, y, 0]), radius=0.055, color=color) for x, y in offsets])

    def construct(self):
        self.title("Explainable uncertainty in point-cloud registration")
        offsets = [(-1.2, -0.5), (-0.9, 0.25), (-0.4, -0.15), (0.1, 0.55), (0.4, -0.45), (0.85, 0.15), (1.2, -0.15)]
        fixed = self.cloud(LEFT * 2.1, BLUE, offsets)
        moving = self.cloud(RIGHT * 2.0 + UP * 0.8, TEAL, offsets)
        self.play(LaggedStartMap(FadeIn, fixed), LaggedStartMap(FadeIn, moving))
        self.play(moving.animate.shift(LEFT * 4.1 + DOWN * 0.8), run_time=1.8)

        uncertainty = Circle(radius=1.9, stroke_color=AMBER, stroke_opacity=0.65, fill_color=AMBER, fill_opacity=0.06).move_to(LEFT * 2.1)
        self.play(ShowCreation(uncertainty))
        causes = VGroup(
            self.pill("sensor noise", CORAL),
            self.pill("poor initialization", AMBER),
            self.pill("limited overlap", BLUE),
        ).arrange(DOWN, buff=0.35).shift(RIGHT * 3.2)
        self.play(LaggedStartMap(FadeIn, causes, lag_ratio=0.18))
        arrows = VGroup(*[Arrow(uncertainty.get_right(), item.get_left(), buff=0.15, color=MUTED, stroke_width=2) for item in causes])
        self.play(LaggedStartMap(GrowArrow, arrows, lag_ratio=0.13))
        self.finish("GP-CA explains not only how uncertain registration is, but why")


class SUPERExplainer(PaperScene):
    def construct(self):
        self.title("Predicting visual-inertial odometry risk")
        axes = Axes(x_range=[0, 10, 1], y_range=[0, 4, 1], width=10.2, height=4.2, axis_config={"color": MUTED})
        axes.shift(DOWN * 0.15)
        path = VMobject(color=BLUE, stroke_width=5).set_points_smoothly([axes.c2p(x, 1.0 + 0.1 * np.sin(x)) for x in np.linspace(0, 10, 30)])
        drift = VMobject(color=CORAL, stroke_width=5).set_points_smoothly([axes.c2p(x, 1.0 + 0.08 * (x - 5) ** 2) for x in np.linspace(5, 10, 20)])
        risk = VMobject(color=AMBER, stroke_width=4).set_points_smoothly([axes.c2p(x, 0.45 + 2.7 / (1 + np.exp(-(x - 5.2) * 2))) for x in np.linspace(0, 10, 40)])
        self.play(ShowCreation(axes), ShowCreation(path), run_time=1.2)
        self.play(ShowCreation(risk), run_time=1.4)
        warning_x = 5.9
        warning = DashedLine(axes.c2p(warning_x, 0), axes.c2p(warning_x, 4), color=AMBER)
        warning_text = self.pill("recover now", AMBER).next_to(warning, UP, buff=0.1)
        self.play(ShowCreation(warning), FadeIn(warning_text))
        self.play(ShowCreation(drift), run_time=1.5)
        caught = self.label("trajectory degradation", 22, CORAL).next_to(drift, UP, buff=0.25)
        self.play(FadeIn(caught))
        self.finish("Optimizer sensitivity reveals risk before the trajectory fails")


class GUARDExplainer(PaperScene):
    def construct(self):
        self.title("Learning-aware, model-based collision avoidance")
        start = LEFT * 5 + DOWN * 1.5
        goal = RIGHT * 5 + UP * 1.5
        robot = Circle(radius=0.28, color=TEAL, fill_color=TEAL, fill_opacity=1).move_to(start)
        obstacle = RoundedRectangle(width=1.6, height=2.4, corner_radius=0.25, color=CORAL, fill_color=CORAL, fill_opacity=0.2).shift(RIGHT * 0.4)
        direct = DashedLine(start, goal, color=MUTED)
        self.play(FadeIn(robot), FadeIn(obstacle), ShowCreation(direct))
        uncertainty = Circle(radius=1.0, color=AMBER, fill_color=AMBER, fill_opacity=0.09).move_to(obstacle)
        uncertainty_label = self.label("perception uncertainty", 20, AMBER).next_to(uncertainty, DOWN)
        self.play(GrowFromCenter(uncertainty), FadeIn(uncertainty_label))

        points = [start, LEFT * 2 + DOWN * 1.1, DOWN * 2.0 + RIGHT * 0.2, RIGHT * 2.4 + DOWN * 1.0, goal]
        safe_path = VMobject(color=TEAL, stroke_width=6).set_points_smoothly(points)
        self.play(ShowCreation(safe_path), MoveAlongPath(robot, safe_path), run_time=2.8)
        controller = self.pill("transparent MPC", BLUE).to_corner(UL, buff=0.5).shift(DOWN * 0.7)
        perception = self.pill("uncertainty attribution", AMBER).next_to(controller, DOWN, buff=0.3)
        self.play(FadeIn(controller), FadeIn(perception))
        self.finish("Uncertainty shapes the path while control remains inspectable")


class FailureValueExplainer(PaperScene):
    def construct(self):
        self.title("A failure is not the same as a valuable intervention")
        labels = ["A", "B", "C", "D", "E"]
        failure = [0.92, 0.83, 0.67, 0.55, 0.41]
        benefit = [0.12, 0.28, 0.95, 0.72, 0.35]
        left_title = self.label("rank by failure", 24, CORAL).shift(LEFT * 3.4 + UP * 1.9)
        right_title = self.label("rank by intervention value", 24, TEAL).shift(RIGHT * 3.2 + UP * 1.9)
        self.play(FadeIn(left_title), FadeIn(right_title))
        left_rows = VGroup()
        right_rows = VGroup()
        for i, name in enumerate(labels):
            lbar = Rectangle(width=3.2 * failure[i], height=0.34, stroke_width=0, fill_color=CORAL, fill_opacity=0.75)
            lbar.align_to(ORIGIN, LEFT)
            lname = self.label(name, 20).next_to(lbar, LEFT, buff=0.18)
            left_rows.add(VGroup(lbar, lname))
            rbar = Rectangle(width=3.2 * benefit[i], height=0.34, stroke_width=0, fill_color=TEAL, fill_opacity=0.75)
            rbar.align_to(ORIGIN, LEFT)
            rname = self.label(name, 20).next_to(rbar, LEFT, buff=0.18)
            right_rows.add(VGroup(rbar, rname))
        left_rows.arrange(DOWN, aligned_edge=LEFT, buff=0.22).shift(LEFT * 4.3)
        order = sorted(range(5), key=lambda i: benefit[i], reverse=True)
        right_sorted = VGroup(*[right_rows[i] for i in order]).arrange(DOWN, aligned_edge=LEFT, buff=0.22).shift(RIGHT * 2.1)
        self.play(LaggedStartMap(FadeIn, left_rows, lag_ratio=0.1), LaggedStartMap(FadeIn, right_sorted, lag_ratio=0.1))
        budget_left = SurroundingRectangle(VGroup(*left_rows[:2]), color=PAPER, buff=0.12)
        budget_right = SurroundingRectangle(VGroup(*right_sorted[:2]), color=PAPER, buff=0.12)
        self.play(ShowCreation(budget_left), ShowCreation(budget_right))
        left_value = self.pill("low value", CORAL).next_to(budget_left, DOWN, buff=0.25)
        right_value = self.pill("high value", TEAL).next_to(budget_right, DOWN, buff=0.25)
        self.play(FadeIn(left_value), FadeIn(right_value))
        self.finish("Audit the value of deferred cases, not only their error probability")


class DriftMonitoringExplainer(PaperScene):
    def construct(self):
        self.title("From drift alarms to deployment authorization")
        stream = NumberLine(x_range=[0, 10, 1], width=10.5, color=MUTED).shift(UP * 1.7)
        dots = VGroup(*[Dot(stream.n2p(i), radius=0.09, color=BLUE if i < 5 else AMBER) for i in range(10)])
        self.play(ShowCreation(stream), LaggedStartMap(FadeIn, dots, lag_ratio=0.08))
        drift = self.pill("distribution changed", AMBER).next_to(stream.n2p(5), DOWN, buff=0.35)
        self.play(FadeIn(drift))

        checks = VGroup(
            self.pill("risk", BLUE),
            self.pill("coverage", BLUE),
            self.pill("deferral value", BLUE),
        ).arrange(RIGHT, buff=0.55).shift(UP * 0.1)
        self.play(LaggedStartMap(FadeIn, checks, lag_ratio=0.15))
        actions = VGroup(
            self.pill("CONTINUE", TEAL),
            self.pill("RETUNE", AMBER),
            self.pill("WATCH", BLUE),
            self.pill("ESCALATE", CORAL),
            self.pill("REVOKE", CORAL),
        ).arrange(RIGHT, buff=0.22).shift(DOWN * 1.45)
        arrows = VGroup(*[Arrow(checks.get_bottom(), action.get_top(), buff=0.18, stroke_width=2, color=MUTED) for action in actions])
        self.play(LaggedStartMap(GrowArrow, arrows, lag_ratio=0.08), LaggedStartMap(FadeIn, actions, lag_ratio=0.08))
        self.play(actions[1].animate.set_color(PAPER).scale(1.12), run_time=0.7)
        self.finish("Monitoring should decide whether autonomy is still justified")
