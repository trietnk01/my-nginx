import React from "react";
import {
	Box,
	useTheme,
	Card,
	CardContent,
	ClickAwayListener,
	Divider,
	Grid,
	IconButton,
	Menu,
	MenuItem,
	Popper,
	TextField,
	Typography,
	useMediaQuery,
	TableContainer,
	Table,
	TableBody,
	TableRow,
	TableCell,
	Avatar
} from "@mui/material";
import { toggleDrawer } from "store/slices/drawer";
import { useDispatch } from "store";
import { useTranslation } from "react-i18next";
import { yupResolver } from "@hookform/resolvers/yup";
import PerfectScrollbar from "react-perfect-scrollbar";
import Picker, { IEmojiData, SKIN_TONE_MEDIUM_DARK } from "emoji-picker-react";
import { appDrawerWidth as drawerWidth, gridSpacing } from "store/constant";
import { useSelector } from "store";
import AttachmentTwoToneIcon from "@mui/icons-material/AttachmentTwoTone";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import MoreHorizTwoToneIcon from "@mui/icons-material/MoreHorizTwoTone";
import ErrorTwoToneIcon from "@mui/icons-material/ErrorTwoTone";
import VideoCallTwoToneIcon from "@mui/icons-material/VideoCallTwoTone";
import CallTwoToneIcon from "@mui/icons-material/CallTwoTone";
import SendTwoToneIcon from "@mui/icons-material/SendTwoTone";
import MoodTwoToneIcon from "@mui/icons-material/MoodTwoTone";
import HighlightOffTwoToneIcon from "@mui/icons-material/HighlightOffTwoTone";
import { DefaultRootStateProps } from "types";
import { display } from "@mui/system";
import { END_POINT, socket } from "configs";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import useAuth from "hooks/useAuth";
import NoAvatar from "assets/images/no-avatar.jpg";
import { MyTextField } from "control";
interface IFormInput {
	message: string;
}

const ChatFrm = () => {
	const dispatch = useDispatch();
	const theme = useTheme();
	const { t } = useTranslation();
	const { user } = useAuth();
	const [isConnected, setIsConnected] = React.useState(socket.connected);
	const [messageData, setMessageData] = React.useState<string[]>([]);
	const {
		register,
		handleSubmit,
		control,
		getValues,
		watch,
		setValue,
		setError,
		clearErrors,
		formState: { errors }
	} = useForm<IFormInput>({
		defaultValues: {
			message: ""
		}
	});
	const onSubmit: SubmitHandler<IFormInput> = async (dataForm) => {
		await socket.emit("CLIENT_RETURN_MESSAGE", dataForm.message);
		setValue("message", "");
	};
	React.useEffect(() => {
		dispatch(toggleDrawer());
		const onConnect = () => {
			setIsConnected(true);
		};
		const onDisconnect = () => {
			setIsConnected(false);
		};
		socket.on("connect", onConnect);
		socket.on("disconnect", onDisconnect);
		return () => {
			socket.off("connect", onConnect);
			socket.off("disconnect", onDisconnect);
		};
	}, []);
	React.useEffect(() => {
		socket.on("SERVER_RETURN_MESSAGE", (data) => {
			setMessageData((prevState) => [...prevState, data]);
		});
	}, [socket]);
	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<Card variant="outlined">
				<Box
					sx={{
						display: "flex",
						alignItems: "center",
						color: theme.palette.grey[800],
						fontWeight: 500,
						fontSize: "20px",
						height: "60px",
						pl: "20px",
						pr: "20px"
					}}
				>
					{t("Chat")}
				</Box>
				<Divider />
				<Box
					sx={{
						display: "flex",
						alignItems: "center",
						color: theme.palette.grey[600],
						fontSize: "11px",
						height: "60px",
						pl: "20px",
						pr: "20px"
					}}
				>
					{t("State")}: {isConnected ? t("Connected") : t("Disconnected")}
				</Box>
			</Card>
			<Box sx={{ display: "flex", mt: "10px", columnGap: "8px" }}>
				<Box
					sx={{
						width: "300px",
						p: "10px",
						border: "1px solid",
						borderColor: theme.palette.grey[300],
						bgcolor: "#FFF",
						borderRadius: "6px"
					}}
				>
					<TableContainer>
						<Table>
							<TableBody>
								<TableRow hover>
									<TableCell sx={{ width: "30px" }}>
										<Avatar src="http://localhost:8000/images/nguyen-kim-dien.png" />
									</TableCell>
									<TableCell>
										<Box sx={{ fontWeight: 600 }}>Alene</Box>
										<Box sx={{ color: theme.palette.grey[400], fontSize: 11 }}>Technical Department</Box>
									</TableCell>
								</TableRow>
								<TableRow hover>
									<TableCell sx={{ width: "30px" }}>
										<Avatar src="http://localhost:8000/images/nguyen-kim-dien.png" />
									</TableCell>
									<TableCell>
										<Box sx={{ fontWeight: 600 }}>Alene</Box>
										<Box sx={{ color: theme.palette.grey[400], fontSize: 11 }}>Technical Department</Box>
									</TableCell>
								</TableRow>
								<TableRow hover>
									<TableCell sx={{ width: "30px" }}>
										<Avatar src="http://localhost:8000/images/nguyen-kim-dien.png" />
									</TableCell>
									<TableCell>
										<Box sx={{ fontWeight: 600 }}>Alene</Box>
										<Box sx={{ color: theme.palette.grey[400], fontSize: 11 }}>Technical Department</Box>
									</TableCell>
								</TableRow>
								<TableRow hover>
									<TableCell sx={{ width: "30px" }}>
										<Avatar src="http://localhost:8000/images/nguyen-kim-dien.png" />
									</TableCell>
									<TableCell>
										<Box sx={{ fontWeight: 600 }}>Alene</Box>
										<Box sx={{ color: theme.palette.grey[400], fontSize: "11px" }}>Technical Department</Box>
									</TableCell>
								</TableRow>
							</TableBody>
						</Table>
					</TableContainer>
				</Box>
				<Box
					sx={{
						display: "flex",
						flexDirection: "column",
						height: "1000px",
						border: "1px solid",
						borderColor: theme.palette.grey[300],
						bgcolor: "#FFF",
						borderRadius: "6px",
						p: "8px",
						flexGrow: 1
					}}
				>
					<Box
						sx={{
							display: "flex",
							alignItems: "center",
							columnGap: "8px",
							borderBottom: "1px solid",
							borderColor: theme.palette.grey[300],
							pb: "8px"
						}}
					>
						<IconButton size="large">
							<MenuRoundedIcon />
						</IconButton>
						<Box sx={{ display: "flex", columnGap: "12px" }}>
							<Avatar src={user && user.avatar ? `${END_POINT.URL_SERVER}/images/${user.avatar}` : NoAvatar} />
							<Box>
								<Box sx={{ fontWeight: 600 }}>{user && user.name ? user.name : ""}</Box>
								<Box sx={{ color: theme.palette.grey[400], fontSize: "11px" }}>Technical Department</Box>
							</Box>
						</Box>
					</Box>
					<Box sx={{ display: "flex", flexDirection: "column", rowGap: "12px", flexGrow: 1, pt: "12px", pb: "12px" }}>
						{messageData &&
							messageData.map((elmt: string, idx: number) => {
								return (
									<Box key={`chat-frm-receiver-idx-${idx}`} sx={{ display: "flex", justifyContent: "flex-end" }}>
										<Box
											sx={{
												display: "flex",
												flexDirection: "column",
												rowGap: "4px",
												bgcolor: "#e3f2fd",
												p: "12px",
												borderRadius: "8px"
											}}
										>
											<Box sx={{ fontSize: "14px", color: theme.palette.grey[800] }}>{elmt}</Box>
											<Box
												sx={{
													display: "flex",
													justifyContent: "flex-end",
													fontSize: "11px",
													color: theme.palette.grey[500]
												}}
											>
												11:23 AM
											</Box>
										</Box>
									</Box>
								);
							})}

						{/* <Box sx={{ display: "flex", justifyContent: "flex-start" }}>
							<Box
								sx={{
									display: "flex",
									flexDirection: "column",
									rowGap: "4px",
									bgcolor: "#ede7f6",
									p: "12px",
									borderRadius: "8px"
								}}
							>
								<Box sx={{ fontSize: "14px", color: theme.palette.grey[800] }}>Hey. Very Good morning. How are you?</Box>
								<Box sx={{ display: "flex", justifyContent: "flex-end", fontSize: "11px", color: theme.palette.grey[500] }}>
									11:23 AM
								</Box>
							</Box>
						</Box> */}
					</Box>
					<Box sx={{ height: "80px", p: "2px", display: "flex", columnGap: "12px", alignItems: "center" }}>
						<Controller
							name="message"
							defaultValue=""
							control={control}
							render={({ field }) => {
								return <MyTextField {...field} fullWidth label={t("Type a message")} />;
							}}
						/>

						<IconButton color="primary" size="large" type="submit">
							<SendTwoToneIcon />
						</IconButton>
					</Box>
				</Box>
			</Box>
		</form>
	);
};

export default ChatFrm;
